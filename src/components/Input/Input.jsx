import './Input.scss'

const Input = ({ type, name, id, value, onChange, placeholder, className, warnning, style }) => {
  return (
    <label className="form__input--label">
      <span className="visually-hidden">{placeholder}</span>
      <input 
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}      
      placeholder={placeholder} 
      className={className}
      aria-label={placeholder}
      />
      <div 
      className='form__input--error--icon'
      style={style}
      >
      </div>
      <p 
      className='form__input--warnning'
      style={style}
      >
        {warnning}
      </p>
    </label>
  )
}

export default Input