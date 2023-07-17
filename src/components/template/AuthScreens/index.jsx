import { Header } from "../../organisms"

import './style.scss'

const AuthScreens = ({ children }) => {
  return (
    <>
      <Header />
      <div className="authTemp__wrapper">
        {children}
        <div className="authTemp__img"></div>
      </div>
    </>
  )
}

export default AuthScreens