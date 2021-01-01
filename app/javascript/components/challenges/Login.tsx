import * as React from 'react';

export default function Login() {
  const [email, setEmail] = React.useState<string>('');

  React.useEffect(() => {
    console.log(
      'Once you have fixed this form and added the new functionality sign in with the email: pinpoint@email.com',
    );
  });

  const handleEmailChange = e => setEmail(e.target.value.trim().toLowerCase());

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
        <input name="email" type="email" value={email} onChange={handleEmailChange} />
        <div style={{ color: 'red', margin: '10px 0' }}>{/* Email validation errors go here */}</div>
        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input name="password" type="password" />
          <button type="button">Show Password</button>
        </div>
        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
  );
}
