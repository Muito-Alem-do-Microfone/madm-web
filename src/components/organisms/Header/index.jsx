import logo from '../../../assets/madm-logo.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from '../../atoms/Button'
import { useNavigate } from 'react-router-dom'

import './style.scss'

function Header() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleHomeClick = () => {
    navigate('/home')
  }

  
  return (
    <Navbar variant='dark' expand="lg" className="header">
      <Container>
        <Navbar.Brand onClick={handleHomeClick}>
          <img src={logo} alt='logo' className="header__logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-target="#basic-navbar-nav" />
        <Navbar.Collapse className='header__dropdown' id="basic-navbar-nav">
          <Nav className="header__menu m-auto">
            <Nav.Link
              className="header__menuItem"
              href="#home">Fazer cadastro</Nav.Link>
            <Nav.Link
              className="header__menuItem"
              href="#link">Encontrar músico</Nav.Link>
            <Nav.Link
              className="header__menuItem"
              href="#link">Anunciar</Nav.Link>
            <Nav.Link
              className="header__menuItem"
              href="#link">Mural de bandas</Nav.Link>
          </Nav>
          <div className="header__rightContainer">
            <Button onClick={handleLoginClick} variant='primary' text='Fazer login' />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header