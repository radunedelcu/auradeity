import React from 'react';
import {useState} from 'react';
import '../App.css'

function alert()
{
  return(window.alert("Login successfull"))
};

function Login()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token ,setToken]=useState('')
  const handleEmailChange = (value) =>
  {
    setEmail(value);
  }
  const handlePasswordChange = (value) =>
  {
    setPassword(value);
  }

  async function handleSave(event){
    event.preventDefault();
    const data = {
      Email: email,
      Password: password,
    }
    
    await fetch("https://localhost:7113/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json",
      'Accept': "application/json"
    },
      body: JSON.stringify(data)
    }).then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
 
  const test = parseJwt(data);
  console.log(test);
  sessionStorage.setItem('token', data);
  
  alert()
})
.then(response=>setToken(response))
.catch((error) => {
  console.error('Error:', error);
});

async function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

console.log(token);
  };

  return(
    <div className="container">
    <div className="screen2">
      <div className="screen__content">
        <div className="title">
          <h1>Sign In</h1>
        </div>
        <form className="login">
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input type="text" className="login__input" placeholder="User name / Email"  onChange={(e) => handleEmailChange(e.target.value)}/>
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder="Password"  onChange={(e) => handlePasswordChange(e.target.value)}/>
          </div>
          <button className="button login__submit" onClick={handleSave}>
            <span className="button__text" >Sign In</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>				
        </form>
      </div>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>		
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>
)
}
export default Login;