import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="page">
      <h1>🎉 Happy Birthday! 🎉</h1>
      <p>
        This website is a very serious documentary about your love life.
        <br />
        Viewer discretion is advised.
      </p>

      <p className="small">
        From your most loved brother and favorite sister-in-law 💅
      </p>

      <Link to="/exes" className="btn">Begin the Chaos</Link>
    </div>
  )
}
