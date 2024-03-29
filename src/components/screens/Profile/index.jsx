import { Footer, SideBar } from '../../organisms'
import { Button } from '../../atoms'

import { ReactComponent as SpotifyLogo } from '../../../assets/spotify.svg'
import { ReactComponent as InstagramLogo } from '../../../assets/instagram.svg'
import { ReactComponent as TwitterLogo } from '../../../assets/twitter.svg'
import { ReactComponent as FacebookLogo } from '../../../assets/facebook.svg'
import profileImg from '../../../assets/profile-img.png'
import { redirect, useParams } from 'react-router-dom'

import './style.scss'
import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'


const ProfileScreen = () => {
  let { id } = useParams()
  const { authUser } = useAuth()

  useEffect(() => {
    if (!id) {
      redirect("/home", { replace: true });
    }
  }, [])

  console.log(authUser)

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh'}}>
      <SideBar />
      <div className='profile'>
        <div className='profile__leftContainer'>
          <img className='profile__image' src={profileImg} />
          <Button variant={'profile'} text={'Compartilhar perfil'}/>
          <Button variant={'profile'} text={'Denunciar Perfil'}/>
        </div>
        <div className='profile__rightContainer'>
          <div className='profile__section'>
            <div className='profile__header'>
              <span>{authUser.full_name}</span>
              <div className='profile__socials'>
                <SpotifyLogo />
                <InstagramLogo />
                <TwitterLogo />
                <FacebookLogo />
              </div>
            </div>
            <span className='profile__instruments'>Vocal, Guitarra, Baixo</span>
            <span className='profile__location'>
              {`${authUser.city}, ${authUser.state}, ${authUser.country}`}
            </span>
          </div>
          <div className='profile__section'> 
            <span>Sobre</span>
            <p className='profile__bio'>
              {authUser.bio}
            </p>
          </div>
          <div className='profile__section'> 
            <span>Anuncios abertos</span>
            {/*TODO: componentize this */}
            <div className='announcementContainer'>
              <div className='announcement'>
                <span>
                  Procuro guitarrista solo
                </span>
              </div>
              <div className='announcement'>
                <span>
                  Procuro guitarrista solo
                </span>
              </div>
              <div className='announcement'>
                <span>
                  Procuro guitarrista solo
                </span>
              </div>
              <div className='announcement'>
                <span>
                  Procuro guitarrista solo
                </span>
              </div>
              <div className='announcement'>
                <span>
                  Procuro guitarrista solo
                </span>
              </div>
            </div>
          </div>
          <div className='profile__section'> 
            <span>Artistas preferidos</span>
            {/*TODO: componentize this */}
            <div className='announcementContainer'>
              <div className='announcement'>
                <span>
                  Artista 1
                </span>
              </div>
              <div className='announcement'>
                <span>
                  Artista 2
                </span>
              </div>
              <div className='announcement'>
                <span>
                  Artista 3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen