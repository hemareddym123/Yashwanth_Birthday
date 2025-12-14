import { Link } from 'react-router-dom'

export default function Intermission() {
  return (
    <div className="page">
      <h1>⏸ Intermission</h1>

      <p>
        At this point, lessons were learned.
        <br />
        Growth happened.
        <br />
        (Allegedly.)
      </p>

      <Link to="/crush" className="btn">Proceed Carefully</Link>
    </div>
  )
}
