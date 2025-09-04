function Header(){

  return(
    <div className="header-body">
      <div className="header-left">
        <div>
          <img src="./src/assets/logo.jpg" alt="Brand Logo" id="logo"/>
        </div>
        <div>
          <h1 id="title">Stress Meter</h1>
        </div>
      </div>
      <div className="header-right">
        <div className="nav-key">Home</div>
        <div className="nav-key">Benefits</div>
        <div className="nav-key">About Us</div>
        <div className="nav-key">Login</div>
      </div>
    </div>
  );

}

export default Header