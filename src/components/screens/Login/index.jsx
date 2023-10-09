import { useAuth } from "../../../context/AuthContext";
import { LoginSection } from "../../organisms/"
import AuthScreens from "../../template/AuthScreens"

function Login() {

  return (
    <>
      <AuthScreens>
        <LoginSection/>
      </AuthScreens>
    </>
  )
}

export default Login