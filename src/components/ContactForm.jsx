import { useRef, useState } from 'react'
import { siteConfig } from '../data/content'
import { submitInquiry } from '../lib/submitInquiry'

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const pending = useRef(false)
  const configured = Boolean(siteConfig.contactEndpoint)
  const sending = status === 'sending'

  async function handleSubmit(event) {
    event.preventDefault()
    if (pending.current || !configured) return

    const form = event.currentTarget
    const data = new FormData(form)
    pending.current = true
    setError('')
    setStatus('sending')

    try {
      await submitInquiry(siteConfig.contactEndpoint, data)
      form.reset()
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message)
      setStatus('error')
    } finally {
      pending.current = false
    }
  }

  return (
    <form className="contact-form" action={siteConfig.contactEndpoint || undefined} method="post" onSubmit={handleSubmit}>
      <fieldset className="contact-fields" disabled={sending || !configured} aria-busy={sending}>
        <div className="form-row">
          <label>Name<input type="text" name="name" autoComplete="name" maxLength="200" required /></label>
          <label>Email<input type="email" name="email" autoComplete="email" maxLength="254" required /></label>
        </div>
        <label>Type of project
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Website / technical help</option>
            <option>Guitar lessons</option>
            <option>Other</option>
          </select>
        </label>
        <label>Tell me a little about what you're looking for.
          <textarea name="message" rows="6" maxLength="10000" required />
        </label>
        <input className="contact-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button className="button button-dark" type="submit" disabled={sending || !configured}>
          {sending ? 'Sending…' : 'Send inquiry'} <span aria-hidden="true">↗</span>
        </button>
      </fieldset>
      <div className="form-status" role="status" aria-live="polite" aria-atomic="true">
        {sending && <p>Sending your inquiry…</p>}
        {status === 'success' && <p>Thanks! Your inquiry has been submitted. I’ll reply to the email address you provided.</p>}
      </div>
      {status === 'error' && <p className="form-error" role="alert">{error} <a href={`mailto:${siteConfig.email}`}>Email me</a>.</p>}
      {!configured && <p className="form-note">Please <a href={`mailto:${siteConfig.email}`}>email me directly</a> while the contact form is unavailable.</p>}
    </form>
  )
}

export default ContactForm
