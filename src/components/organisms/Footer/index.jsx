import styles from "./footer.module.scss";
import bgFooter from "../../../assets/bg-footer.jpg";
import logo from "../../../assets/madm-logo.png";


function Footer() {
    return (
        <div className={styles.footerSection} style={{ backgroundImage: `url(${bgFooter})` }}>
            <div className={styles.footerContent}>
                <h1>Quem somos?</h1>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
        </div>
    );
  }
  
  export default Footer;