import logo from "../images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <img src={logo} className="footer-logo" alt="Logo Kasa" />
        <h2>© 2023 Kasa. All rights reserved</h2>
      </div>
    </footer>
  );
}
