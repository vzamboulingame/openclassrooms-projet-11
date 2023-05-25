import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Logo Kasa" />
        </Link>
        <nav>
          <ul className="header-links">
            <li>
              <Link
                className={`header-links-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`header-links-item ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
