import React, { useState } from "react";
import logo from "../../../assets/madm-logo.png";
import styles from './registerSection.module.scss';
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../state/reducers/auth/slice";

const RegisterSection = () => {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')

  const dispatch = useDispatch()

  const handleCreateUser = () => {
    dispatch(registerUser(
      name,
      email,
      password
    ))
  }

  return (
    <>
      <section className={styles.login}>
        <div className={styles.wrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h1 className={styles.login_title}>Registro</h1>

          <label className={styles.login_label}>
            <input
              value={name}
              onChange={({target}) => setName(target.value)}
              type="text"
              name="name"
              className={styles.input}
              placeholder="Nome"
            />
          </label>

          <label className={styles.login_label}>
            <input
              value={email}
              onChange={({target}) => setEmail(target.value)}
              type="email"
              name="email"
              className={styles.input}
              placeholder="E-mail"
            />
          </label>

          <label className={styles.login_label}>
            <input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              type="password"
              name="password"
              className={styles.input}
              placeholder="Senha"
            />
          </label>

          <label className={styles.login_label}>
            <input
              value={passConf}
              onChange={({target}) => setPassConf(target.value)}
              type="password"
              name="password"
              className={styles.input}
              placeholder="Confirme sua senha"
            />
          </label>

          <label className={styles.login_label_checkbox}>
            <input type="checkbox" className={styles.input_checkbox} />
            Manter login
          </label>
        </div>

        <div className={styles.wrapper}>

        <div className={styles.btnSection}>
          <Button
            onClick={handleCreateUser}
            variant="primary"
            text="Entrar"
          />
        </div>
        <div className={styles.btnSection}>
          <Button variant="secondary" text="Entrar com Google" />
        </div>
          <a href="/login" className={styles.login_link}>
            Já tenho uma conta
          </a>
        </div>
      </section>
    </>
  );
}
  
  export default RegisterSection;