import { Link } from "react-router-dom";

/**
 * NotFound component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function NotFound() {
  return (
    <main className="container main notfound">
      <span className="notfound-code">404</span>
      <p className="notfound-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="notfound-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}
