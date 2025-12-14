import { Link } from 'react-router-dom'

export default function Exes() {
  return (
    <div className="page">
      <h1>📸 The Exes</h1>

      <p>
        A tribute to the brave souls who tried.
        <br />
        We thank them for their service.
      </p>

      <div className="image-row">
        <img src="/ex1.jpg" alt="Ex 1" />
        <img src="/ex2.jpg" alt="Ex 2" />
      </div>

      <p className="small">
        Character development wasn’t free.
      </p>

      <Link to="/intermission" className="btn">Next Chapter</Link>
    </div>
  )
}
