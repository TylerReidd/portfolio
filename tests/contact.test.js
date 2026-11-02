import assert from 'node:assert/strict'
import { test } from 'node:test'
import { submitInquiry } from '../src/lib/submitInquiry.js'

const endpoint = 'https://formspree.io/f/testform'

test('sends all inquiry fields and the reply email to the configured form', async (t) => {
  const data = new FormData()
  data.set('name', 'Test Visitor')
  data.set('email', 'visitor@example.com')
  data.set('projectType', 'Guitar lessons')
  data.set('message', 'I would like to ask about lessons.')
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, endpoint)
    assert.equal(options.method, 'POST')
    assert.equal(options.headers.Accept, 'application/json')
    assert.equal(options.body.get('email'), 'visitor@example.com')
    assert.equal(options.body.get('projectType'), 'Guitar lessons')
    assert.equal(options.body.get('message'), 'I would like to ask about lessons.')
    assert.ok(options.signal instanceof AbortSignal)
    return new Response('{}', { status: 200 })
  })
  await submitInquiry(endpoint, data)
})

test('does not send inquiries when the endpoint is missing or invalid', async (t) => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => {
    throw new Error('Unexpected request')
  })
  for (const invalid of ['', '/contact', 'https://example.com/f/test']) {
    await assert.rejects(submitInquiry(invalid, new FormData()), /unavailable/)
  }
  assert.equal(fetchMock.mock.callCount(), 0)
})

test('rejects provider failures including HTML error pages without clearing input', async (t) => {
  const data = new FormData()
  data.set('message', 'Keep this inquiry for retry.')
  t.mock.method(globalThis, 'fetch', async () => new Response('<h1>Error</h1>', { status: 500 }))
  await assert.rejects(submitInquiry(endpoint, data), /couldn’t be sent/)
  assert.equal(data.get('message'), 'Keep this inquiry for retry.')
})

test('reports rate limiting as a temporary failure', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 429 }))
  await assert.rejects(submitInquiry(endpoint, new FormData()), /temporarily busy/)
})

test('does not report success after network failure or timeout', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => { throw new TypeError('Failed to fetch') })
  await assert.rejects(submitInquiry(endpoint, new FormData()), /couldn’t confirm/)
})
