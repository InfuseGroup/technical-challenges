import React, { useState } from 'react';


export default function Login() {
  const [values, setValues] = useState({ email: "", password: ""});

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
      <h3>1. Fix the email field.</h3> //Done
      <h3>2. Validate the email is in the correct format (client side) on input blur.</h3>
      /*  I've implemented a simple input pattern validation. I lack the knowledge to implement an onBlur function */
      <h3>3. Implement the functionality to show the password.</h3>
      // Attempted multiple ways to do this, but do not understand how to do so successfully
      <h3>4. Login successfully using the correct password.</h3>
      // password is password123

      <form method="POST" action="/login">
        <input type="hidden" name="authenticity_token" value={authToken} />

        <label htmlFor="">Email</label>
        <input name="email" type="email" defaultValue="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
" />

        <div style={{ color: 'red', margin: '10px 0' }}>{/* Email validation errors go here */}</div>

        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input name="password" type="password" values={values.password} onChange={handleChange} />

          <button type="button">Show Password</button>

        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
