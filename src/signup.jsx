import { useState } from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  const initialValue = { username: "", Email: "", password: "" };
  let [formValue, setFormValue] = useState(initialValue);
  const clickHandle = (e) => {
    const { name , value} = e.target;
    setFormValue = ({...formValue , [name]: value});
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-title">
          <p>Sign Up</p>
        </div>
        <div className="signup-detail">
          <div className="username">
            <div className="username-text" id="signup-name">
              Username
            </div>
            <div className="username-input">
              <input type="text" id="signup-input" name="username" value={formValue.username} onChange={clickHandle}/>
            </div>
          </div>
          <div className="username">
            <div className="username-text" id="signup-mail">
              E-mail
            </div>
            <div className="username-input">
              <input type="email" id="signup-input" name="email" />
            </div>
          </div>
          <div className="password">
            <div className="password-text" id="signup-pass">
              Password
            </div>
            <div className="password-input">
              <input type="password" id="signup-input" name="input" />
            </div>
          </div>
        </div>
        <div className="signup-button">
          <button className="signup-btn">Sign Up</button>
        </div>
        <div className="signup-signup">
          <h4>
            Already have an account ?{" "}
            <NavLink to="/login" id="signup-createlink">
              Login Here
            </NavLink>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
