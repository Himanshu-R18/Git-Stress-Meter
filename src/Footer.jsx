import React from "react";

function Footer(){

  const myYear = new Date().getFullYear();

  return(
    <div className="footer-container">
      <p className="footer-panel">&copy; {myYear}-{myYear+1} humans Rawat. All Rights Reserved.</p>
    </div>
  );

}

export default Footer