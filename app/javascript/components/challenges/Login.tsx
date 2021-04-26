import * as React from 'react';

export default function Login() {
  const [email, setEmail] = React.useState<string>('');
  let [emailValid, setEmailValid] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

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

  const changeEmail = (e) => setEmail(e.target.value);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testResult = re.test(String(email.target.value).toLowerCase());
    if (testResult) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
    console.log('show password clicked' + showPassword);
  }

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
        <input name="email" type="email" value={email} onChange={changeEmail} onBlur={validateEmail}/>
        { !emailValid &&
          <div style={{ color: 'red', margin: '10px 0' }}>{
          <div>
            <p>Your email is invalid</p>
            <p>Please use an email of the correct format to continue.</p>
            <p>For example, michaelbutlerjersey@gmail.com</p>
          </div>
          }</div>
        }
        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input name="password" type={showPassword ? "text" : "password"} />
          <button type="button" onClick={showPasswordHandler} >Toggle Show Password</button>
        </div>
        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
  );
}
