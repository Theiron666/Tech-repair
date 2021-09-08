import React, { Component } from "react";
import Logo from "./img/logo.svg";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        <header className="header" id="scroll">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="" width="30" height="30" />
              </a>
              <button
                className="navbar-toggler border-1 text-info"
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  this.state.show
                    ? "collapse navbar-collapse"
                    : "collapse navbar-collapse active"
                }
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="/#contact">
                      Contacto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      Nosotros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
