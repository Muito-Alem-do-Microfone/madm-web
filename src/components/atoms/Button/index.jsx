import PropTypes from 'prop-types'
import './style.scss'

export default function Button({ variant, text, onClick }) {
  const buttonClassName = `button button--${variant}`

  return (
    <button onClick={onClick} className={buttonClassName}>
      {text}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}