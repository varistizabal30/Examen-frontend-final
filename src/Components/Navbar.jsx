import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/navbar.module.css";

const Navbar = () => {
  const { toggleTheme } = useContext(AppContext);

  return (
    <div className="container">
      <ul className="navbar-nav mb-2 mb-sm-0" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <li className={`nav-item ${styles.navBarLink}`}>
          <Link to="./" className="nav-link">
            Home
          </Link>
        </li>
        <li className={`nav-item ${styles.navBarLink}`}>
          <Link to="./contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className={`nav-item ${styles.navBarLink}`}>
          <Link to="./favs" className="nav-link">
            Favs
          </Link>
        </li>
        <li className={`nav-item`}>
          <button onClick={toggleTheme} className={`btn btn-light ${styles.btnStyle}`}>
            ☀ 🌙{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;