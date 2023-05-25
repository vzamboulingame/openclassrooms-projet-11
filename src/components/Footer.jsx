import logo from "../images/logo-white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <img src={logo} className="footer-logo" alt="Logo Kasa" />
        <p className="footer-text">© 2023 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
