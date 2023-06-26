import PropTypes from 'prop-types'
import './style.scss'

export default function Button({ variant, text, onClick }) {

  return (
    <button onClick={() => onClick()} className={`button ${variant}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string
}