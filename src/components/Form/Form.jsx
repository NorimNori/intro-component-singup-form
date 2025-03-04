import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = () => {
  return (
    <section className="form-container">
      <form className="form">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />
        <Button />
        <p className="form__terms">
          By clicking the button, you are agreeing to our{" "}
          <a href="#" className="form__terms-highlight">Terms and Services</a>
        </p>
      </form>
    </section>
  );
};

export default Form;