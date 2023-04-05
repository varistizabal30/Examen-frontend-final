import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/navbar.module.css";
import styles2 from "../Styles/app.module.css";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <div className={ `${styles.container} ${styles2[theme]}`} >
      <ul className={styles.navBar}>
        <li className={styles.navBarLink}>
          <Link to="./" className="nav-link">
            Home
          </Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to="./contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to="./favs" className="nav-link">
            Favs
          </Link>
        </li>
        <li>
          <button onClick={toggleTheme} className={`btn btn-light ${styles.btnStyle}`}>
            ☀ 🌙
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;