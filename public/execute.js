export async function chat(message) {
  const res = await fetch('/api/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ command: message })
  })

  if (!res.ok) {
    throw new Error('API error')
  }

  return res.json()
}
