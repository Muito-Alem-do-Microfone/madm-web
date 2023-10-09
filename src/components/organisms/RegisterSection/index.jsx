import { useState } from "react"
import Button from "../../atoms/Button"
import TransparentInput from "../../atoms/TransparentInput"

import './style.scss'

const RegisterSection = ({ handleSubmit }) => {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')

  return (
    <div className='loginForm'>
      <h1 className='loginForm__title'>Registro</h1>
      <div className='loginForm__form'>
        <TransparentInput
          value={name}
          handleChange={(value) => setName(value)}
          type="text"
          label="Nome"
        />

        <TransparentInput
          value={email}
          handleChange={(value) => setEmail(value)}
          type="email"
          label="E-mail"
        />

        <TransparentInput
          value={password}
          handleChange={(value) => setPassword(value)}
          type="password"
          label="Senha"
        />

        <TransparentInput
          value={passConf}
          handleChange={(value) => setPassConf(value)}
          type="password"
          label="Confirme sua senha"
        />
      </div>
      <div className='loginForm__buttons'>
        <Button
          variant="primary"
          text="Entrar"
          onClick={() => handleSubmit(name, email, password)}
        />
        <Button variant="secondary" text="Entrar com Google" />
      </div>
      <div className="loginForm__links">
        <a href="/login" className='login_link'>
          Já tenho uma conta
        </a>
      </div>
    </div>
  )
}
  
  export default RegisterSection