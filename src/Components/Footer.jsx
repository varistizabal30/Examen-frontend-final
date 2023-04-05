import styles from '../Styles/footer.module.css'
import facebook from "../img/ico-facebook.png"
import instagram from "../img/ico-instagram.png"
import whatsapp from "../img/ico-whatsapp.png"
import tiktok from "../img/ico-tiktok.png"

const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }
    return (
      <footer>
        <div className={styles.footerWrapper}>
          <div className={`navbar-light bg-light} ${styles.footer}`}>
            <div className="container">
              <div className={`row`}>
                <div className="col-sm-12 col-lg-6">
                </div>
                <div className={`col-sm-12 col-lg-6 ${styles.icons}`}>
                  <img src={facebook} alt="ícone do facebook" className={styles.icon} />
                  <img src={instagram} alt="ícone do instagram" className={styles.icon} />
                  <img src={whatsapp} alt="ícone do whatsapp" className={styles.icon} />
                  <img src={tiktok} alt="ícone do tiktok" className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >
    )
  }
  
  export default Footer