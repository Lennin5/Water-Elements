import './style.css';
import './App.css';
import Signup from './Signup';

function App() {
  return (
    <div /*className="App"*/ className="login-box">
        <h1>Login</h1>
    <div class="textbox">
      <i class="fas fa-user"></i>
      <input type="text" placeholder="Username" id="email"></input>
    </div>

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" placeholder="Password" id="pass"></input>
  </div>
  <br></br>
  
  <input type="button" class="btn" value="Sign in" onclick="preview()"></input>
    </div>
  );
}

function SU() {
  return(
    <Signup />
  )
}




export default App;
