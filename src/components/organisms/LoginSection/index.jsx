import eye from "../../../assets/eye.png";
import at from "../../../assets/at.png";
import logo from "../../../assets/madm-logo.png";
import "../../../App.css";
import Button from "../../atoms/Button";

function LoginSection() {
    return (
      <>
        <section className="login">
          <div className="wrapper">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="login_title">Login</h1>
  
            <label className="login_label">
              <input type="text" name="username" className="input" placeholder="E-mail/Usuário"/>
              <img src={at} alt="at" className="at" />
            </label>
  
            <label className="login_label">
              <input type="password" name="password" className="input" placeholder="Senha" />
              <img src={eye} alt="eye" className="eye" />
            </label>
  
            <label className="login_label--checkbox">
              <input type="checkbox" className="input--checkbox" />
              Manter login
            </label>
          </div>
  
            <Button variant="primary" text="Entrar" />

            <Button variant="secondary" text="Entrar com Google" />
  
            <a href="#" className="login_link">
              Esqueci minha senha
            </a>
            <a href="/register" className="login_link">
              Criar conta
            </a>
        </section>
      </>
    );
  }
  
  export default LoginSection;