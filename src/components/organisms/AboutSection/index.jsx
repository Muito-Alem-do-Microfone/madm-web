import styles from "./aboutSection.module.scss";
import bgAbout from "../../../assets/bg-footer.jpg";
import logo from "../../../assets/madm-logo.png";


function About() {
    return (
        <div className={styles.aboutSection} style={{ backgroundImage: `url(${bgAbout})` }}>
            <div className={styles.aboutContent}>
                <h1>Quem somos?</h1>
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
        </div>
    );
  }
  
  export default About;