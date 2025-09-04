function Content(){

  return(
    <div className="main">
      <div className="lmain">
        <div className="image1">
          <img src="./src/assets/logo.jpg" alt="homeImage" />
        </div>
        <div className="overview">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat accusantium nesciunt at asperiores facere inventore quia voluptatibus exercitationem non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore nostrum cumque enim in laboriosam necessitatibus sunt adipisci doloribus laborum suscipit numquam quia natus, fugiat illum esse ex tempore. Quaerat!</p>
        </div>
      </div>
      <div className="rmain">
        <div className="rtitle">
          <h1 id="rtext">Mood & Stress Tester</h1>
        </div>
        <div className="rdescription">
          <h2 id="rtext">Test Your Current Mood & Stress Level.</h2>
        </div>
        <div className="mybutton">
          <button className="rbutton">Start Test</button>
        </div>
      </div>
    </div>
  );

}

export default Content