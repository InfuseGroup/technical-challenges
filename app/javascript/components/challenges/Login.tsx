import React, { useState } from 'react';
import ValidationComponent from 'react-native-form-validator';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidationError, setEmailValidationError] = useState("");
  const [showPassword, setShowPassword] = useState("");

function handleEmailChange(event) {
  setEmail(event.target.value);
}

function handleEmailBlur(event){
// onBlur take the event target value and check it against validation
// if setEmail is valid
// then no errors
// else
// "This is not a valid email"

const isValid = this.validate({
  emailAddress: { email: true }
});
validation errors
  this.setState({ isValid });

console.log("this works on blur");

}




// function validateEmail(email) {
//   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return re.test(String(email).toLowerCase());
// }

// function validateForm(values) {
//   const errors = {}
//   if (!values.email) errors.email = "Email address is required"
//   else if (!validateEmail(values.email)) errors.email = "Not a valid email address"
//
//   return errors
// }
//
// const [errors, setErrors] = useState({})
//
// function handleEmailBlur() {
//   const errors = validateForm({ email })
//   setErrors(errors)
//   }
// }

  React.useEffect(() => {
    console.log(
      'Once you have fixed this form and added the new functionality sign in with the email: pinpoint@email.com',
    );
  });

  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'green',
    padding: '10px 15px',
    borderRadius: '2px',
    fontSize: '16px',
    color: 'white',
  };


  const authToken = document.querySelector('head meta[name="csrf-token"]' as any).content;

  return (
    <div>
      <h1>🥈 Challenge 2</h1>
      <h3>1. Fix the email field.</h3>
      <h3>2. Validate the email is in the correct format (client side) on input blur.</h3>
      <h3>3. Implement the functionality to show the password.</h3>
      <h3>4. Login successfully using the correct password.</h3>

      <form method="POST" action="/login">
        <input type="hidden" name="authenticity_token" value={authToken} />

        <label htmlFor="">Email</label>
        <input name="email" type="email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
        <div style={{ color: 'red', margin: '10px 0' }}>{/* errors to go here */}</p>}</div>

        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input name="password" type={showPassword ? "text" : "password"} />

          <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' + " password" : 'Show' + " password"}</button>

        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
