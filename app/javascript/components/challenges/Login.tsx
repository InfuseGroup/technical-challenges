import * as React from 'react';
import { useState } from 'react';



export default function Login() {

  const [email, setEmail] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(true);


  function handleEmailChange(event) {
    setEmail(event.target.value);
  };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

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

      <form  method="POST" action="/login">
        <input type="hidden" name="authenticity_token" value={authToken} />
        <label htmlFor="">Email</label>
        <input name="email" type="email" value={email} onChange={handleEmailChange} />
        <div style={{ color: 'red', margin: '10px 0' }}></div>
        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input name="password" type={showPassword ? "text" : "password"} />
        </div>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'} Password</button>
        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
  );

}
