import './Input.scss'

const Input = ({ type, name, id, value, onChange, placeholder }) => {
  return (
    <label className="form__label">
      <span className="visually-hidden">{placeholder}</span>
      <input 
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}      
      placeholder={placeholder} 
      className="form__input form__input--error"
      aria-label={placeholder}
      />
    </label>
  )
}

export default Input