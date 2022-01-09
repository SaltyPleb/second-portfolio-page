import React from "react";
import Main from "../Main";
import logo from "../static/logo2.jpg";

const Background = () => {
  return (
    <div className="background">
      <div className="main_backgroud" style={{ backgroundImage: `url(${logo})`}}> 
      <Main/>
      </div>
    </div>
  );
};

export default Background;
