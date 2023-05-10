import googleIcon from "../../../assets/google-icon.png";
import logo from "../../../assets/madm-logo.png";
import "../../../App.css";

function RegisterSection() {
    return (
      <>
        <section className="login">
          <div className="wrapper">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="login_title">Registro</h1>
  
            <label className="login_label">
              <input type="text" name="name" className="input" placeholder="Nome"/>
            </label>
  
            <label className="login_label">
              <input type="email" name="email" className="input" placeholder="E-mail" />
            </label>

            <label className="login_label">
              <input type="password" name="password" className="input" placeholder="Senha" />
            </label>

            <label className="login_label">
              <input type="password" name="password" className="input" placeholder="Confirme sua senha" />
            </label>
  
            <label className="login_label--checkbox">
              <input type="checkbox" className="input--checkbox" />
              Manter login
            </label>
          </div>
  
          <div className="wrapper">
            <button type="button" className="login_button" disabled>
              Entrar
            </button>

            <button type="button" className="login_google_button" disabled>
            <img src={googleIcon} alt="eye" className="google-icon" />
              Entrar com Google
            </button>
  
            <a href="/login" className="login_link">
              Já tenho uma conta
            </a>
          </div>
        </section>
      </>
    );
  }
  
  export default RegisterSection;