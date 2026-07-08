// Helper for building API URLs and normalizing responses.
const CODESPACE = import.meta.env.VITE_CODESPACE_NAME

export function getApiBase() {
  // If VITE_CODESPACE_NAME is set use the GitHub Codespaces forwarded URL.
  // Otherwise fall back to a safe relative `/api` path so the app doesn't call
  // an invalid host like "undefined-8000.app.github.dev".
  if (CODESPACE) {
    return `https://${CODESPACE}-8000.app.github.dev/api`
  }
  return '/api'
}

export async function fetchAndNormalize(component, url) {
  const base = getApiBase()
  const endpoint = url || `${base}/${component}/`
  const res = await fetch(endpoint)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  const json = await res.json()

  // Normalize paginated and array responses to { items: [], next: string|null }
  let items = []
  let next = null

  if (Array.isArray(json)) {
    items = json
  } else if (json && typeof json === 'object') {
    if (Array.isArray(json.results)) items = json.results
    else if (Array.isArray(json.data)) items = json.data
    else if (Array.isArray(json.items)) items = json.items
    else if (Array.isArray(json.results?.data)) items = json.results.data
    else if (Array.isArray(json.data?.results)) items = json.data.results
    else if (Array.isArray(json.items?.data)) items = json.items.data
    else if (Array.isArray(json)) items = json
    else {
      // If the object itself looks like an item, keep it as a single-item list.
      items = Array.isArray(json) ? json : [json]
    }

    // Common pagination keys
    next = json.next || json.next_page || json.nextUrl || json.next_url || null
    if (!next && json.meta && (json.meta.next || json.meta.next_page)) next = json.meta.next || json.meta.next_page
  }

  return { items, next }
}

export function absoluteNextUrl(next) {
  if (!next) return null
  // If next is already absolute, return it.
  if (/^https?:\/\//i.test(next)) return next
  // Otherwise prefix with the API base.
  return `${getApiBase()}${next.startsWith('/') ? '' : '/'}${next}`
}
