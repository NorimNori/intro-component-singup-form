import { useState } from "react";
import useForm from "../../hooks/useForm";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './Form.scss'

const Form = () => {
  const [first_name_error, set_first_name_error] = useState(false);
  const [last_name_error, set_last_name_error] = useState(false);
  const [email_error, set_email_error] = useState(false);
  const [password_error, set_password_error] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendData = async (data) => {
    let hasError = false;

    set_first_name_error(!data.first_name);
    set_last_name_error(!data.last_name);
    set_email_error(!emailRegex.test(data.email));
    set_password_error(!data.password);

    if (!data.first_name || !data.last_name || !emailRegex.test(data.email) || !data.password) {
      hasError = true;
    }

    if (!hasError) {
      console.log(data);
    }
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
        />

        <Input 
        type="text"
        id="last_name"
        name="last_name"
        value={input.last_name}
        onChange={handleInputChange}  
        placeholder="Last Name" 
        />

        <Input 
        type="email"
        id="email"
        name="email"
        value={input.email}
        onChange={handleInputChange} 
        placeholder="Email address" 
        />

        <Input 
        type="password"
        id="password"
        name="password"
        value={input.password}
        onChange={handleInputChange} 
        placeholder="Password" 
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