import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const variantStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export default function Button({ variant, text, onClick }) {
  const buttonClassName = [styles.button, variantStyles[variant]].join(' ');

  return (
    <button onClick={() => onClick()} className={buttonClassName}>
      {text}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}