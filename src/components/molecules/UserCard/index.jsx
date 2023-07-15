import { PropTypes } from 'prop-types'

import profileImg from "../../../assets/profile-img.jpg"
import { Button } from "../../atoms"

import "./style.scss"

function UserCard({ name, instruments, city, state, genres}) {
  const genresText = genres.reduce((text, genre) => text + ', ' + genre)

  return (
    <div className='userCard'>
      <div className='userCard__imageWrapper'>
        <img src={profileImg} alt="Foto do Perfil" />
      </div>
      <div className='userCard__content'>
        <p className='userCard__title'>{name}</p>
        <p className='userCard__info'>{`${instruments}, ${city} - ${state}`}</p>
        <p className='userCard__info'>
          {genresText}
        </p>
      </div>
      <div className='userCard__footer'>
        <Button variant="primary" text="Conectar" />
      </div>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string,
  instruments: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  genres: PropTypes.array,
}

export default UserCard
