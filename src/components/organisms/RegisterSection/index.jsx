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
        <TransparentInput
          value={name}
          handleChange={(value) => setName(value)}
          type="text"
          label="Nome"

        />
        {nameErr}

        <TransparentInput
          value={email}
          handleChange={(value) => setEmail(value)}
          type="email"
          label="E-mail"
        />
        {emailErr}

        <TransparentInput
          value={password}
          handleChange={(value) => setPassword(value)}
          type="password"
          label="Senha"
        />
        <p>*Senha deve conter no mínimo 8 dígitos</p>
        <p>*Senha deve conter: Um número, uma letra maiúscula, uma minúscula e um caractere especial </p>
        {passwordErr}
        <TransparentInput
          value={passConf}
          handleChange={(value) => setPassConf(value)}
          type="password"
          label="Confirme sua senha"
        />
        {passConfErr}
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