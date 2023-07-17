import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Button } from "../../atoms"

import './style.scss'

const LoginSection = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  console.log(user)

  const handleLogin = () => {
    navigate('/profile')
  }

  return (
    <div className='loginForm'>
      <h1 className='loginForm__title'>Login</h1>
      <div className='loginForm__form'>
        <div className='loginForm__inputWrapper'>
          <input
            className='loginForm__input'
            onChange={({ target }) => setUser(target.value)}
            value={user}
          />
          <label className={`loginForm__label ${user ? 'loginForm__labelMoved' : '' }`}>E-mail/Usuário</label>
        </div>

        <div className='loginForm__inputWrapper'>
          <input
            className='loginForm__input'
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            type='password'
          />
          <label className={`loginForm__label ${password ? 'loginForm__labelMoved' : '' }`}>Senha</label>
        </div>
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