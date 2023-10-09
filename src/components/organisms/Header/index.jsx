import { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import logo from '../../../assets/madm-logo.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from '../../atoms'

import './style.scss'
import { useAuth } from '../../../context/AuthContext'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { authUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleHomeClick = () => {
    navigate('/home')
  }

  const handleLogout = async () => {
    await logout()
  }
  
  return (
    <Navbar variant='dark' expand="lg" className="header">
      <Container fluid className='header__container'>
        <Navbar.Brand onClick={handleHomeClick}>
          <img src={logo} alt='logo' className="header__logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-target="#basic-navbar-nav" />
        <Navbar.Collapse className='header__dropdown' id="basic-navbar-nav">
          <Nav className="header__menu m-auto">
            {
              isLoggedIn ? (
              <Nav.Link
                className="header__menuItem"
                href="#home">Meu perfil
              </Nav.Link>
              ) : (
              <Nav.Link
                className="header__menuItem"
                href="#home">Fazer cadastro
              </Nav.Link>
              )
            }
            <Nav.Link
              className="header__menuItem"
              href="#link">Encontrar músico
            </Nav.Link>
            <Nav.Link
              className="header__menuItem"
              href="#link">Anunciar
            </Nav.Link>
            <Nav.Link
              className="header__menuItem"
              href="#link">Mural de bandas
            </Nav.Link>
          </Nav>
          <div className="header__rightContainer">
            {authUser ?
              <Button onClick={handleLogout} variant='primary' text='Fazer Logout' /> :
              <Button onClick={handleLoginClick} variant='primary' text='Fazer login' />
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header