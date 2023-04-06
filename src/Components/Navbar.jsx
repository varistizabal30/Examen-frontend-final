import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/navbar.module.css";
import styles2 from "../Styles/app.module.css";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <div className={styles.po}>
    <div className={ `${styles.container} ${styles2[theme]}`} >
      <ul className={styles2.navBar}>
        <li className={styles2.navBarLink}>
          <Link to="./" >
            Home
          </Link>
        </li>
        <li className={styles2.navBarLink}>
          <Link to="./contact" >
            Contact
          </Link>
        </li>
        <li className={styles2.navBarLink}>
          <Link to="./favs">
            Favs
          </Link>
        </li>
        <li>
          <button onClick={toggleTheme} className={styles.btnStyle}>
            {theme==="dark"? "🌙" : "☀"}
          </button>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;