import * as React from 'react';

export default function Login() {
  const [email, setEmail] = React.useState('')

  console.log('Once you have fixed this form and added the new functionality sign in with the email: pinpoint@email')

  const buttonStyles = {
    backgroundColor: 'green',
    padding: '15px',
    borderRadius: '10px',
    fontSize: '18px',
    color: 'white',
  }

  const authToken = document.querySelector('head meta[name="csrf-token"]' as any).content

  return(
    <div>
      <h3>1. Fix any errors</h3>
      <h3>2. Validate the email (client side)</h3>
      <h3>3. Impliment the functionality to show the password</h3>
      <form method='POST' action="/login">
        <input type="hidden" name="authenticity_token" value={authToken} />
        <label htmlFor="">Email</label>
        <input name="email" type="text" value={email} />
        <hr/>
        <label htmlFor="">Password</label>
        <input name="password" type="password" />
        <div>
          <a href="javascript:void(0)">Show Password</a>
        </div>
        <button style={buttonStyles} disabled={!email}>Login</button>
      </form>
    </div>
  );
}
