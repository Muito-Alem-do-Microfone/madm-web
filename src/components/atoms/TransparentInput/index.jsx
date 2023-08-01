import PropTypes from 'prop-types'

const TransparentInput = ({label, handleChange, value, type = 'text'}) => {
  return (
    <div className='loginForm__inputWrapper'>
      <input
        className='loginForm__input'
        onChange={({ target }) => handleChange(target.value)}
        value={value}
        type={type}
      />
      <label className={`loginForm__label ${value ? 'loginForm__labelMoved' : '' }`}>{label}</label>
    </div>
  )
}

TransparentInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default TransparentInput