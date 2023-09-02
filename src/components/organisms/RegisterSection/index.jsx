import { useState } from "react"
import Button from "../../atoms/Button"
import TransparentInput from "../../atoms/TransparentInput"
import { validateRegister } from "../../../utils/validation"

import './style.scss'

import { useAuth } from "../../../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RegisterSection = () => {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')
  const [passConfErr, setPassConfErr] = useState("")
  const [nameErr, setNameErr] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")

  const { authUser, register } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (authUser) {
      navigate("/profile", { replace: true})
    }
  }, [authUser])

  const handleRegister = async (e) => {
    e.preventDefault();

    const errors = validateRegister(name, email, password, passConf)
  

    if (Object.keys(errors).length === 0) {
    try {
      setEmailErr("");
      setPasswordErr("");
      setNameErr("");
      setPassConfErr("")
      await register(email, password);
      navigate("/profile", { replace: true })
    } catch (error) {
      console.error("Login failed:", error)
    }
  } else {
    setNameErr(errors.name || "")
    setEmailErr(errors.email || "");
    setPasswordErr(errors.password || "");
    setPassConfErr(errors.passConf || "");
  }
}

  return (
    <div className='loginForm'>
      <h1 className='loginForm__title'>Registro</h1>
      <form className='loginForm__form'>
        <div className={`loginForm__inputWrapper ${nameErr ? 'has-error' : ''}`}>
        <TransparentInput
          value={name}
          handleChange={(value) => setName(value)}
          type="text"
          label="Nome"
        />
        <p className="loginForm__error">{nameErr}</p>
        {nameErr && <div className="error-divider"></div>}
        </div>

        <div className={`loginForm__inputWrapper ${emailErr ? 'has-error' : ''}`}>
        <TransparentInput
          value={email}
          handleChange={(value) => setEmail(value)}
          type="email"
          label="E-mail"
        />
        <p className="loginForm__error">{emailErr}</p>
        {emailErr && <div className="error-divider"></div>}
        </div>

        <div className={`loginForm__inputWrapper ${passwordErr ? 'has-error' : ''}`}>
        <TransparentInput
          value={password}
          handleChange={(value) => setPassword(value)}
          type="password"
          label="Senha"
        />
        <p className="loginForm__ads">*Senha deve conter no mínimo 8 dígitos</p>
        <p className="loginForm__ads">*Senha deve conter: Um número, uma letra maiúscula, uma minúscula e um caractere especial </p>
        <p className="loginForm__error">{passwordErr}</p>
        {passwordErr && <div className="error-divider"></div>}
        </div>

        <div className={`loginForm__inputWrapper ${passConfErr ? 'has-error' : ''}`}>
        <TransparentInput
          value={passConf}
          handleChange={(value) => setPassConf(value)}
          type="password"
          label="Confirme sua senha"
        />
        <p className="loginForm__error">{passConfErr}</p>
        {passConfErr && <div className="error-divider"></div>}
        </div>
      </form>
      <div className='loginForm__buttons'>
        <Button
          variant="primary"
          text="Entrar"
          onClick={handleRegister}
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