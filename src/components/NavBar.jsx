import React from "react";
import "../App.css";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

/* Este componete visualiza el NavBar, que no tiene una ruta, porque se visualiza en todos los componentes */

const NavBar = () => {
  return (
    <div className="bloqueNav">
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link to={"/"}>
            <img src="/logo.png" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categoria
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/category/${"motherboard"}`}>
                      Motherboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"procesador"}`}>
                      Procesadores
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"video"}`}>
                      Placa de video
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/category/${"memoria"}`}>
                      Memorias RAM
                    </Link>
                  </li>
                </ul>
              </li>
              <Link className="nav-link" to={"/store"}>
                Store
              </Link>
            </ul>
          </div>

          {/*Componente CardWidget */}

          <CardWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
