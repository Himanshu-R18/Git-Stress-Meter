import { NavLink } from "react-router-dom";

function Header() {



  return (
    <div className="header-container">
      <div className="header-left">
        <div className="header-logo">
          <img src="/src/assets/logo.png" alt="Project's Logo" id="logo1" />
        </div>
        <div className="header-title">Stress Meter</div>
      </div>
      <div className="header-right">
        <div className="nav-item"><NavLink to="/" id="nav-items">Home</NavLink></div>
        <div className="nav-item"><NavLink id="nav-items">Benefits</NavLink></div>
        <div className="nav-item"><NavLink id="nav-items">About Us</NavLink></div>
        <div className="nav-item"><NavLink to="/Login" id="nav-items">Login</NavLink></div>
      </div>
    </div>
  );
}

export default Header;
