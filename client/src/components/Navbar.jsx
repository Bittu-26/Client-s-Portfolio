import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Muskan Rawat</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
