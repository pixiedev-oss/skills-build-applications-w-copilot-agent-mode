import './App.css'
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import Activities from './components/Activities'
import Workouts from './components/Workouts'
import Teams from './components/Teams'
import Users from './components/Users'
import Leaderboard from './components/Leaderboard'

function Home() {
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
            <Link className="btn btn-outline-secondary btn-lg" to="/activities">
              View activities
            </Link>
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

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">OctoFit</Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App
