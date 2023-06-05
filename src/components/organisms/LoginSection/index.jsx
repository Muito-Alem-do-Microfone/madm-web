import eye from "../../../assets/eye.png";
import at from "../../../assets/at.png";
import logo from "../../../assets/madm-logo.png";
import styles from './loginSection.module.scss';
import Button from "../../atoms/Button";

function LoginSection() {
    return (
      <>
        <section className={styles.login}>
          <div className={styles.wrapper}>
            <img src={logo} alt="logo" className={styles.logo} />
            <h1 className={styles.login_title}>Login</h1>
  
            <label className={styles.login_label}>
              <input type="text" name="username" className={styles.input} placeholder="E-mail/Usuário"/>
              <img src={at} alt="at" className={styles.at} />
            </label>
  
            <label className={styles.login_label}>
              <input type="password" name="password" className={styles.input} placeholder="Senha" />
              <img src={eye} alt="eye" className={styles.eye} />
            </label>
  
            <label className={styles.login_label_checkbox}>
              <input type="checkbox" className={styles.input_checkbox} />
              Manter login
            </label>
          </div>
  
            <Button variant="primary" text="Entrar" />

            <Button variant="secondary" text="Entrar com Google" />
  
            <a href="#" className={styles.login_link}>
              Esqueci minha senha
            </a>
            <a href="/register" className={styles.login_link}>
              Criar conta
            </a>
        </section>
      </>
    );
  }
  
  export default LoginSection;