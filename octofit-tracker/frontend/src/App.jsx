import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness experience for logging activities, building teams,
            and staying motivated.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Explore the stack
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="/" rel="noreferrer">
              View dashboard
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Ready to train</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Track workouts and activities</li>
                <li className="list-group-item">Join teams and compete</li>
                <li className="list-group-item">Follow a leader board</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
