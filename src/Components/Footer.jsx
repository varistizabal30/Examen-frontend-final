import styles from "../Styles/footer.module.css";
import facebook from "../img/ico-facebook.png";
import instagram from "../img/ico-instagram.png";
import whatsapp from "../img/ico-whatsapp.png";
import tiktok from "../img/ico-tiktok.png";

const Footer = () => {
  return (
    <footer className={styles.icons}>
      <img src={facebook} alt="ícone do facebook" className={styles.icon} />
      <img src={instagram} alt="ícone do instagram" className={styles.icon} />
      <img src={whatsapp} alt="ícone do whatsapp" className={styles.icon} />
      <img src={tiktok} alt="ícone do tiktok" className={styles.icon} />
    </footer>
  );
};

export default Footer;
