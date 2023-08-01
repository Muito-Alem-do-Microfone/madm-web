import PropTypes from 'prop-types'
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

AuthScreens.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthScreens