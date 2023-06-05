import wallpaper from "../../../assets/wallpaper.jpg";
import styles from './register.module.scss'
import RegisterSection from "../../../components/organisms/RegisterSection";


function Register() {
  return (
      <div className={styles.wallpaper} style={{ backgroundImage: `url(${wallpaper})` }}>
        <RegisterSection />
      </div>
  );
}

export default Register;