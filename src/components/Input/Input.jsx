
const Input = ({ type, placeholder }) => {
  return (
    <label className="form__label">
      <span className="visually-hidden">{placeholder}</span>
      <input 
      type={type} 
      placeholder={placeholder} 
      className="form__input form__input--error"
      aria-label={placeholder}
      required
      />
    </label>
  )
}

export default Input