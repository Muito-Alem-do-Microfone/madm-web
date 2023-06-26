import wallpaper from "../../../assets/wallpaper.jpg";
import styles from './login.module.scss'
import LoginSection from "../../../components/organisms/LoginSection";


function Login() {
  return (
      <div className={styles.wallpaper} style={{ backgroundImage: `url(${wallpaper})` }}>
        <LoginSection />
      </div>
  );
}

export default Login;