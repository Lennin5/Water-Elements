import './style.css';
import './App.css';
import './Login';
import { auth } from './firebase';
import { useRef } from 'react';

function App() {

  const emailRef = useRef(null);
    const passRef = useRef(null);

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value, passRef.current.value).then(user=>{
      console.log(user)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="login-box">
        <h1>Login</h1>
    <div class="textbox">
      <i class="fas fa-user"></i>
      <input type="text" ref={emailRef} placeholder="Username" id="email"></input>
    </div>

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" ref={passRef} placeholder="Password" id="pass"></input>
  </div>
  <br></br>
  
  <input type="button" class="btni" text-color="black" value="Sign in" onClick={signIn}></input>
    </div>
  );
  
}



export default App;
