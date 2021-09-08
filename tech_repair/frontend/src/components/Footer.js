import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer-basic">
        <p className="copyright">TECH REPAIR © 2021</p>
        <div className="container">
          <ul className="fb">
            <li>
              <a href="/contact">Contacto</a>
              <a href="/">Home</a>
              <a href="/about">Nosotros</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
