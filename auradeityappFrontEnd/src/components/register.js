import React from 'react';
import {useState} from 'react';
import '../App.css'

function alert()
{
  return(window.alert("Account successfully created"))
};

function Register()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      await fetch("https://localhost:7113/api/auth/signup", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      
    });
    console.log("success")
    alert()
    };
    
    // const url = 'http://localhost:7059/api/auth/signup';
    // axios.post(url,data).then((result) =>{
    //   alert(result.data);
    // }).catch((error) => {
    //   alert(error);
    // })
    return(
      <div className="container">
    <div className="screen1">
      <div className="screen__content">
      <div className="title">
          <h1 >Sign Up</h1>
        </div>
        <form className="login">
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input type="text" className="login__input" placeholder='Enter email' onChange={(e) => handleEmailChange(e.target.value)}/>
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder='Enter password' onChange={(e) => handlePasswordChange(e.target.value)}/>
          </div>
          <button className="button login__submit" onClick={handleSave}>
            <span className="button__text">Sign Up</span>
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
export default Register;
