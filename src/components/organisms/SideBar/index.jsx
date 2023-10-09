import { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { Button } from '../../atoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faUser, faCog, faQuestionCircle, faMagnifyingGlass, faPlus, faRightFromBracket, faTableColumns } from '@fortawesome/free-solid-svg-icons'

import { ReactComponent as LogoIcon } from '../../../assets/logo-icon.svg'
import profileImg from '../../../assets/profile-img.png'

import './style.scss'
import { useAuth } from '../../../context/AuthContext'
import { Nav } from 'react-bootstrap'

function SideBar() {
  const [collapse, setCollapse] = useState(true)
  const { logout } = useAuth()

  const handleLogout = async () => {
    console.log('uahsuahsa')
    await logout()
  }

  return (
    <div className={`sideBar ${collapse && 'sideBar--collapse'}`}>
      <div
        className="sideBar__collapseBtn"
        onClick={() => setCollapse(!collapse)}
      >
        <FontAwesomeIcon icon={faAnglesRight} style={{color: "#000"}} />
      </div>
      <div className='sideBar__logo'>
        <a href="#">
          <LogoIcon />
        </a>
      </div>
      <div className="sideBar__links">
        <ul>
          <li>
            <a href="#dashboard" title="Dashboard">
              <FontAwesomeIcon icon={faUser} style={{color: "#FFF"}} />
              <span className="link hide">Perfil</span>
            </a>
          </li>
          <li>
            <a href="#project" title="Project">
              <FontAwesomeIcon icon={faTableColumns} style={{color: "#FFF"}} />
              <span className="link hide">Meus Anúncios</span>
            </a>
          </li>
          <li>
            <a href="#performance" title="Performance">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#FFF"}} />
              <span className="link hide">Explorar</span>
            </a>
          </li>
          <li>
            <a href="#funds" title="Funds">
              <FontAwesomeIcon icon={faPlus} style={{color: "#FFF"}} />
              <span className="link hide">Criar Anúncio</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sideBar__bottom">
        <div className="sideBar__links">
          <ul>
            <li>
              <a href="#dashboard" title="Dashboard">
                <FontAwesomeIcon icon={faQuestionCircle} style={{color: "#FFF"}} />
                <span className="link hide">Ajuda</span>
              </a>
            </li>
            <li>
              <a href="#project" title="Project">
                <FontAwesomeIcon icon={faCog} style={{color: "#FFF"}} />
                <span className="link hide">Configurações</span>
              </a>
            </li>
            <li>
              <a onClick={handleLogout} title="Project">
                <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#FFF"}} />
                <span className="link hide">Sair</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sideBar__profile">
          <div className="sideBar__avatarWrapper">
            <img className="avatar" src={profileImg} alt="Profile" />
          </div>
          <div className="sideBar__usernameWrapper hide">
              <div className="username">Noé Sebastião</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar