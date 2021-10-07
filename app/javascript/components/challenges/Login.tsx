import * as React from 'react';

export default function Login() {
  const [email, setEmail] = React.useState<string>('');

  // onchange reads the inside of the input each time it is changed.
  // that new result is then set as the new {email} state.
  const onChange = (e) => {
    setEmail(e.target.value)
    }

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

  // toggle to show/hide password
  const [showP, setShowP] = React.useState<boolean>(false);

  
  // changing the input type to email will validate the format, but doesn't work onblur,
  // so just doing it manually.
    
  const [valid, setValid] = React.useState<boolean>(true);
  // every blur will check the email, so starting the boolean as true to hide the error message when first loading.
  const handleBlur = () => {
    const emailCheck = /(.+@.+)((\.com)|(\.co\.uk)|(\.co\.je)|(\.me))/i.test(email)
    // limited it to just a couple of usual endings, though could be extended or made completely flexible
    // there is an alert and the extra text that will stay under the input until it is fixed.
    emailCheck ? setValid(true) : (setValid(false), alert('This needs to be an email.'))
  }

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
        <input name="email" type="email" onChange={onChange} value={email} onBlur={handleBlur} />
        {!valid && <div style={{ color: 'red', margin: '10px 0' }}>E.g. something@somewhere.com</div>}
        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input name="password" type={!showP ? "password" : "text"} />
          <button type="button" onClick={() => setShowP(!showP)}>Show Password</button>
        </div>
        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
  );
}
