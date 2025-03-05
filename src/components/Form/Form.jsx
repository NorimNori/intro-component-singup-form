import Button from "../Button/Button";
import Input from "../Input/Input";
import './Form.scss'

const Form = () => {
  return (
    <section className="form-container" aria-labelledby="form-title">
      <h2 id="form-title" className="visually-hidden">Sign up for free trial</h2>
      <form className="form" aria-describedby="form-terms">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
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