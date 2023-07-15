import React from 'react'
import Header from '../../organisms/Header'

import coverImg from '../../../assets/cover-img.png'
import profileImg from '../../../assets/profile-img.png'
// import spotifyLogo from '../../../assets/spotify-logo.png'
// import instagramLogo from '../../../assets/instagram-logo.png'
// import twitterLogo from '../../../assets/twitter-logo.png'
import badOmens from '../../../assets/bad-omens.png'

import styles from './Profile.module.scss'
import Button from '../../atoms/Button'
import { useSelector } from 'react-redux'

const ProfileScreen = () => {
  const token = useSelector(state => state.auth.token)

  return (
    <>
      {!token && <Header />}
      <div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={coverImg} className={styles.coverImg}/>
          </div>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.floatingContainer}>
              <img className={styles.profileImg} src={profileImg} />
              <div className={styles.statsWrapper}>
                <span><strong>4000</strong>SEGUIDORES</span>
                <span><strong>4000</strong>SEGUINDO</span>
              </div>
              <Button variant={'profile'} text={'Seguir'}/>
              <Button variant={'profile'} text={'Compartilhar perfil'}/>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.firstContainer}>
              <div className={styles.profileUpperWrapper}>
                <span className={styles.profileName}>Noé Sebastião</span>
                <div className={styles.profileSocialsWrapper}>
                  <img src={spotifyLogo} className={styles.profileSocials}/>
                  <img src={instagramLogo} className={styles.profileSocials}/>
                  <img src={twitterLogo} className={styles.profileSocials}/>
                </div>
              </div>
              <div>
                <span className={styles.profileLocation}>Rio de Janeiro, RJ, Brasil</span>
              </div>
            </div>
            <div className={styles.profileSection}> 
              <span>Grupos</span>
              {/*TODO: componentize this */}
              <div className={styles.groupsContainer}>
                <div className={styles.groupWrapper}>
                  <img src={badOmens}/>
                  <span>Bad Omens</span>
                </div>
                <div className={styles.groupWrapper}>
                  <img src={badOmens}/>
                  <span>Bad Omens</span>
                </div>
              </div>
            </div>
            <div className={styles.profileSection}> 
              <span>Sobre</span>
              <div className={styles.bioContainer}>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </div>
            <div className={styles.profileSection}> 
              <span>Instrumentos</span>
              {/*TODO: componentize this */}
              <div className={styles.instrument}>
                <span>
                  Vocal
                </span>
              </div>
            </div>
            <div className={styles.profileSection}> 
              <span>Anuncios abertos</span>
              {/*TODO: componentize this */}
              <div className={styles.announcementContainer}>
                <div className={styles.announcement}>
                  <span>
                    Procuro guitarrista solo
                  </span>
                </div>
                <div className={styles.announcement}>
                  <span>
                    Procuro guitarrista solo
                  </span>
                </div>
                <div className={styles.announcement}>
                  <span>
                    Procuro guitarrista solo
                  </span>
                </div>
                <div className={styles.announcement}>
                  <span>
                    Procuro guitarrista solo
                  </span>
                </div>
                <div className={styles.announcement}>
                  <span>
                    Procuro guitarrista solo
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.profileSection}> 
              <span>Artistas preferidos</span>
              {/*TODO: componentize this */}
              <div className={styles.announcementContainer}>
                <div className={styles.announcement}>
                  <span>
                    Artista 1
                  </span>
                </div>
                <div className={styles.announcement}>
                  <span>
                    Artista 2
                  </span>
                </div>
                <div className={styles.announcement}>
                  <span>
                    Artista 3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileScreen