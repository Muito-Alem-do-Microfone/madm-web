import RegisterSection from "../../organisms/RegisterSection"
import AuthScreens from '../../template/AuthScreens'
import { useAuth } from "../../../context/AuthContext"

function Register() {
  const { register } = useAuth();

  const handleRegister = async (name, email, password) => {
    await register(email, password);
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