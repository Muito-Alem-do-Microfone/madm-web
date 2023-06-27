import React, { useEffect, useState } from 'react';
import eye from "../../../assets/eye.png";
import at from "../../../assets/at.png";
import logo from "../../../assets/madm-logo.png";
import styles from './loginSection.module.scss';
import Button from "../../atoms/Button";

import { loginUser } from '../../../state/reducers/auth/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isTokenValid } from '../../../utils';


const LoginSection = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const token = useSelector(state => state.auth.token) 

  useEffect(() => {
    if (token !== '') {
      try {
        isTokenValid(token)
        navigate('/profile')
      } catch (error) {
        return
      }
    }
  }, [token])

  const handleLogin = () => {
    dispatch(loginUser(user, password))
    navigate('/profile')
  }

  return (
    <>
      <section className={styles.login}>
        <div className={styles.wrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h1 className={styles.login_title}>Login</h1>

          <label className={styles.login_label}>
            <input
              type="text"
              name="username"
              className={styles.input}
              placeholder="E-mail/Usuário"
              value={user}
              onChange={({target}) => setUser(target.value)}
            />
            <img src={at} alt="at" className={styles.at} />
          </label>

          <label className={styles.login_label}>
            <input
              type="password"
              name="password"
              className={styles.input}
              placeholder="Senha"
              value={password}
              onChange={({target}) => setPassword(target.value)}
            />
            <img src={eye} alt="eye" className={styles.eye} />
          </label>

          <label className={styles.login_label_checkbox}>
            <input type="checkbox" className={styles.input_checkbox} />
            Manter login
          </label>
        </div>

        <Button onClick={handleLogin} variant="primary" text="Entrar" />

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