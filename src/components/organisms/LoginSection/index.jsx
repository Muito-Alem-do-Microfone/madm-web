import { useEffect, useState } from 'react'

import { redirect, useNavigate } from 'react-router-dom'
import { Button } from "../../atoms"

import './style.scss'
import TransparentInput from '../../atoms/TransparentInput'
import { useAuth } from '../../../context/AuthContext'
import { validateLogin } from '../../../utils/validation'

const LoginSection = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")

  const navigate = useNavigate()

  const { authUser, login } = useAuth()

  useEffect(() => {
    if (authUser) {
      navigate("/profile", { replace: true})
    }
  }, [authUser])

  const handleLogin = async (e) => {

    e.preventDefault();

    const errors = validateLogin(email, password)
  
    if (Object.keys(errors).length === 0) {
      try {
        setEmailErr("");
        setPasswordErr("");
        await login(email, password);
        navigate("/profile", { replace: true });
      } catch (error) {
        console.error("Login failed:", error);
      }
    } else {
      setEmailErr(errors.email || "");
      setPasswordErr(errors.password || "");
    }
    }

  return (
    <div className='loginForm'>
      <h1 className='loginForm__title'>Login</h1>
      <div className='loginForm__form'>
        <TransparentInput
          label='E-mail/Usuário'
          value={email} 
          handleChange={(value) => setEmail(value)}
        />
        {emailErr}

        <TransparentInput
          label='Senha'
          value={password}
          handleChange={(value) => setPassword(value)}
          type='password'
        />
        <p>*Senha deve conter no mínimo 8 dígitos</p>
        <p>*Senha deve conter: Um número, uma letra maiúscula, uma minúscula e um caractere especial </p>
        {passwordErr}

      </div>
      <div className='loginForm__buttons'>
        <Button onClick={handleLogin} variant="primary" text="Entrar" />
        <Button variant="secondary" text="Entrar com Google" />
      </div>

      <div className='loginForm__links'>
        <a href="#" className='login_link'>
          Esqueci minha senha
        </a>
        <a href="/register" className='login_link'>
          Criar conta
        </a>
      </div>
    </div>
  )
}
  
export default LoginSection