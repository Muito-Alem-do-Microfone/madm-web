import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Button } from "../../atoms"

import './style.scss'
import TransparentInput from '../../atoms/TransparentInput'
import { useAuth } from '../../../context/AuthContext'

const LoginSection = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { login } = useAuth();

  const handleLogin = async () => {
    await login(user, password);
  }

  return (
    <div className='loginForm'>
      <h1 className='loginForm__title'>Login</h1>
      <div className='loginForm__form'>
        <TransparentInput
          label='E-mail/Usuário'
          value={user}
          handleChange={(value) => setUser(value)}
        />
        <TransparentInput
          label='Senha'
          value={password}
          handleChange={(value) => setPassword(value)}
          type='password'
        />
      </div>
      <div className='loginForm__buttons'>
        <Button onClick={() => handleLogin()} variant="primary" text="Entrar" />
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