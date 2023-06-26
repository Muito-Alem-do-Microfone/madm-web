import PropTypes from 'prop-types'
import './style.scss'

export default function Button({ variant, text }) {

  return (
    <button className={`button ${variant}`}>
        {text}
    </button>
  )
}

Button.PropTypes = {
    variant: PropTypes.string,
    text: PropTypes.string
}