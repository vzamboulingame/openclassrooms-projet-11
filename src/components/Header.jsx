import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>KASA</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
