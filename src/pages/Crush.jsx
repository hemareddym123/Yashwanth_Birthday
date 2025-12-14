import { Link } from 'react-router-dom'

export default function Crush() {
  return (
    <div className="page">
      <h1>💘 The Crush</h1>

      <p>
        Then came the one who had you acting different.
        <br />
        Smiling at your phone for no reason.
      </p>

      <img src="/crush.jpg" alt="The Crush" />

      <p className="small">
        We all noticed.
      </p>

      <Link to="/roast" className="btn">Time to Roast</Link>
    </div>
  )
}
