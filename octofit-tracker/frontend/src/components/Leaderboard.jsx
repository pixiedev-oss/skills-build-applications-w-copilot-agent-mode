import { useEffect, useState } from 'react'
import { fetchAndNormalize, absoluteNextUrl } from '../utils/apiUrl'

export default function Leaderboard() {
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
      const { items: newItems, next: n } = await fetchAndNormalize('leaderboard', url)
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
      <h2>Leaderboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ol className="list-group list-group-numbered mb-3">
        {items.map((it, idx) => (
          <li className="list-group-item" key={it.id ?? idx}>
            {it.username || it.name || JSON.stringify(it)} — {it.score ?? it.points ?? ''}
          </li>
        ))}
      </ol>
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
