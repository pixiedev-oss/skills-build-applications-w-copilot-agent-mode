import { useEffect, useState } from 'react'
import { fetchAndNormalize, absoluteNextUrl } from '../utils/apiUrl'

export default function Teams() {
  const [items, setItems] = useState([])
  const [next, setNext] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    load()
  }, [])

  async function load(url) {
    setLoading(true)
    setError(null)
    try {
      const { items: newItems, next: n } = await fetchAndNormalize('teams', url)
      setItems((s) => (url ? s.concat(newItems) : newItems))
      setNext(n)
    } catch (err) {
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-4">
      <h2>Teams</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group mb-3">
        {items.map((it, idx) => (
          <li className="list-group-item" key={it.id ?? idx}>
            {it.name || JSON.stringify(it)}
          </li>
        ))}
      </ul>
      {loading && <div>Loading…</div>}
      {next && (
        <button
          className="btn btn-primary"
          onClick={() => load(absoluteNextUrl(next))}
        >
          Load more
        </button>
      )}
    </div>
  )
}
