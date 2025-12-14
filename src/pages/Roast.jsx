import { Link } from "react-router-dom";

export default function Roast() {
  return (
    <div className="page">
      <h2>Special Roast Section 🔥</h2>

      <ul>
        <li>Devotee of Lord Shiva 🕉️</li>
        <li>Mother: Christian ✝️</li>
        <li>Crush / Future Wife: Christian ✝️</li>
      </ul>

      <p className="roast-box">
        Home → Church ✝️ <br />
        Heart → Church ✝️ <br />
        Soul → Kailash 🕉️ <br /><br />
        Lord Shiva watching calmly while
        Jesus already feels like family 😌
      </p>

      <Link className="next" to="/finale">
        Final Page →
      </Link>
    </div>
  );
}
