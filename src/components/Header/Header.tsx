import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logomrm.jpeg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: "100px" }} />
          </Link>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/projects">Projetos Executados</Link>
            </li>
            <li>
              <Link to="/clients">Clientes</Link>
            </li>
            <li>
              <Link to="/about">Quem Somos</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
