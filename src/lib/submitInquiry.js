export async function submitInquiry(endpoint, data) {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    throw new Error('The contact form is unavailable. Please use the email link instead.')
  }

  let response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(20000),
    })
  } catch {
    throw new Error('We couldn’t confirm your inquiry was sent. Please check your connection and try again, or email me directly.')
  }

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('The form is temporarily busy. Please try again later or email me directly.')
    }
    throw new Error('Your inquiry couldn’t be sent. Please try again or email me directly.')
  }
}
