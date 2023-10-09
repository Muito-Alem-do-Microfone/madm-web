import RegisterSection from "../../organisms/RegisterSection"
import AuthScreens from '../../template/AuthScreens'
import { useAuth } from "../../../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const { authUser, register } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (authUser) {
      navigate("/profile", { replace: true})
    }
  }, [authUser])

  const handleRegister = async (name, email, password) => {
    try {
      await register(email, password);
      navigate("/profile", { replace: true })
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <>
      <AuthScreens>
        <RegisterSection handleSubmit={
          (name, email, password) => handleRegister(name, email, password)
          }
        />
      </AuthScreens>
    </>
  )
}

export default Register