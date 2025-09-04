import { NavLink } from "react-router-dom";


function Login(){


  
  return(
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">
          <p>Login</p>
        </div>
        <div className="login-detail">
          <div className="username">
            <div className="username-text" id="username1">Username</div>
            <div className="username-input" ><input type="text" id="input"/></div>
          </div>
          <div className="password">
            <div className="password-text" id="username2">Password</div>
            <div className="password-input" ><input type="password" id="input" /></div>
          </div>
        </div>
        <div className="login-button">
          <button className="login-btn">
            Login
          </button>
        </div>
        <div className="login-signup">
          <h4>Don't have account ?  <NavLink to="/Signup" id="login-createlink" >Create Account</NavLink></h4>
        </div>
      </div>
    </div>
  );

}

export default Login