import logo from '../../../assets/madm-logo.png'
import instagram from '../../../assets/instagram-white.png'
import facebook from '../../../assets/facebook-white.png'
import Button from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'

import './style.scss'

function Header() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  
  return (
    <>
      <section className="header">
        <img src={logo} alt='logo' className="header__logo" />
        <div className="header__menu">
            <p className="header__menuItem">Fazer cadastro</p>
            <p className="header__menuItem">Encontrar músico</p>
            <p className="header__menuItem">Anunciar</p>
            <p className="header__menuItem">Mural de bandas</p>
        </div>
        <div className="header__rightContainer">
          <div className="header__socialsWrapper">
            <img src={instagram} alt='instagram' className="header__socials" />
            <img src={facebook} alt='facebook' className="header__socials" />
          </div>
          <Button onClick={handleLoginClick} variant='primary' text='Fazer login' />
        </div>
      </section>
    </>
  )
}

export default Header
