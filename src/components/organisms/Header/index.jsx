import logo from "../../../assets/madm-logo.png";
import instagram from "../../../assets/instagram-white.png";
import facebook from "../../../assets/facebook-white.png";
import Button from "../../atoms/Button";

import styles from "./Header.module.scss";

function Header() {
  
  return (
    <>
      <section className={styles.headerSection}>
        <img src={logo} alt="logo" className={styles.logo} />

        <div className={styles.registerSearchSection}>
            <p className={styles.register}>Fazer cadastro</p>
            <p className={styles.register}>Encontrar músico</p>
            <p className={styles.register}>Anunciar</p>
            <p className={styles.register}>Mural de bandas</p>
        </div>

        <div className={styles.socialsLoginSection}>
          <img src={instagram} alt="instagram" className={styles.instagram} />
          <img src={facebook} alt="facebook" className={styles.facebook} />
          <Button variant="primary" text="Fazer login" />
        </div>
        
      </section>
    </>
  );
}

export default Header;
