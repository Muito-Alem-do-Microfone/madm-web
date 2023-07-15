import { PropTypes } from 'prop-types'

import hand from '../../../assets/hi-5.png'
import networking from '../../../assets/networking.png'
import player from '../../../assets/guitar-player.png'
import instruments from '../../../assets/live-music.png'

import './style.scss'

function ExploreItem({ title, text, img }) {
  const defineImg = () => {
    let src
    switch (img) {
      case 'hi5':
        src = hand;
        break;
      case 'player':
        src = player;
        break;
      case 'networking':
        src = networking;
        break;
      case 'instruments':
        src = instruments;
        break;
    }
    return src
  }

  return (
    <div className='exploreItem'>
      <div className='exploreItem__header'>
        <img className='titleImg' src={defineImg()} alt="" />
        <h1 >{title}</h1>
      </div>
      <p className='exploreItem__content'>{text}</p>
    </div>
  )
}


ExploreItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default ExploreItem