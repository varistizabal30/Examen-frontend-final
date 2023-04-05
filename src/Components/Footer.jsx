import styles from "../Styles/footer.module.css";
import styles2 from "../Styles/app.module.css";
import facebook from "../img/ico-facebook.png";
import instagram from "../img/ico-instagram.png";
import whatsapp from "../img/ico-whatsapp.png";
import tiktok from "../img/ico-tiktok.png";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";



const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <main className={`${styles2[theme]}`}>
    <footer className={ `${styles.icons} ${styles.footer}`}>
      
      <img src={facebook} alt="ícone do facebook" className={styles.icon} />
      <img src={instagram} alt="ícone do instagram" className={styles.icon} />
      <img src={whatsapp} alt="ícone do whatsapp" className={styles.icon} />
      <img src={tiktok} alt="ícone do tiktok" className={styles.icon} />
    </footer>
    </main>
  );
};

export default Footer;
