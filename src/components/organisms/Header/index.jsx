import logo from "../../../assets/madm-logo.png"
import instagram from "../../../assets/instagram-white.png"
import facebook from "../../../assets/facebook-white.png"
import Button from "../../atoms/Button"

import styles from "./Header.module.scss"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  
  return (
    <>
      <section className={styles.headerSection}>
        <img src={logo} alt="logo" className={styles.logo} />

        <div className={styles.menuWrapper}>
            <p className={styles.menuItem}>Fazer cadastro</p>
            <p className={styles.menuItem}>Encontrar músico</p>
            <p className={styles.menuItem}>Anunciar</p>
            <p className={styles.menuItem}>Mural de bandas</p>
        </div>

        <div className={styles.buttonsWrapper}>
          <div className={styles.socialsWrapper}>
            <img src={instagram} alt="instagram" className={styles.socials} />
            <img src={facebook} alt="facebook" className={styles.socials} />
          </div>
          <Button onClick={handleLoginClick} variant="primary" text="Fazer login" />
        </div>        
      </section>
    </>
  );
}

export default Header;
