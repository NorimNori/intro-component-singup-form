import { useState } from "react";
import useForm from "../../hooks/useForm";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './Form.scss'

const Form = () => {
  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
  });

  const emailRegex = /^[^\s@]+@(gmail|hotmail|yahoo|outlook|live|icloud|aol|protonmail|zoho|yandex)\.com$/i;

  const sendData = async (data) => {

    const updatedErrors = {
      first_name: !data.first_name,
      last_name: !data.last_name,
      email: !emailRegex.test(data.email),
      password: !data.password,
    };
  
    setErrors(updatedErrors);

    const isValid = !updatedErrors.first_name && !updatedErrors.last_name && !updatedErrors.email && !updatedErrors.password;

    if (!isValid) {
      console.log("error");
      return;
    }

    console.log(data);
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  return (
    <section className="form-container" aria-labelledby="form-title">
      <h2 id="form-title" className="visually-hidden">Sign up for free trial</h2>
      <form 
      onSubmit={handleSubmit}
      className="form" 
      aria-describedby="form-terms">
        <Input 
        type="text"
        id="first_name"
        name="first_name"
        value={input.first_name}
        onChange={handleInputChange}        
        placeholder="First Name"
        className={`form__input ${errors.first_name ? "form__input--error" : ""}`}
        style={{ display: errors.first_name ? "block" : "none" }}
        warning={`${errors.first_name ? "First Name cannot be empty" : ""}`}
        />

        <Input 
        type="text"
        id="last_name"
        name="last_name"
        value={input.last_name}
        onChange={handleInputChange}  
        placeholder="Last Name"
        className={`form__input ${errors.last_name ? "form__input--error" : ""}`}
        style={{ display: errors.last_name ? "block" : "none" }}
        warning={errors.last_name ? "Last Name cannot be empty" : ""}
        />

        <Input 
        type="email"
        id="email"
        name="email"
        value={input.email}
        onChange={handleInputChange} 
        placeholder={`${errors.email ? "email@example/com" : "Email address"}`}
        className={`form__input ${errors.email ? "form__input--error" : ""}`}
        style={{ display: errors.email ? "block" : "none" }}
        warning={errors.email ? "Looks like this is not an email" : ""}
        />

        <Input 
        type="password"
        id="password"
        name="password"
        value={input.password}
        onChange={handleInputChange} 
        placeholder="Password"
        className={`form__input ${errors.password ? "form__input--error" : ""}`}
        style={{ display: errors.password ? "block" : "none" }}
        warning={errors.password ? "Password cannot be empty" : ""}
        />

        <Button />
        <p id="form-terms" className="form__terms">
          By clicking the button, you are agreeing to our{" "}
          <a href="#" className="form__terms-highlight">Terms and Services</a>
        </p>
      </form>
    </section>
  );
};

export default Form;