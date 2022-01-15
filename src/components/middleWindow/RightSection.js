import React, { useState } from "react";
import me from "../../static/me.jpg";

const RightSection = () => {
  const [imgloaded, setImgloaded] = useState(false);

  return (
    <div className="right_board">
      <div className="pic_wrapper">
        <img
          className="me_image"
          src={me}
          alt=""
          style={imgloaded ? {} : { display: "none" }}
          onLoad={() => setImgloaded(!imgloaded)}
        />
        <a href="" className="name">
          @SaltyPleb
        </a>
        <a href="" className="name green">
          #openMind #porfolioPage
        </a>
        <a href="" className="name rainbow_text">
          #react #scss #styled-components
        </a>
      </div>
      <div className="calendar"></div>
    </div>
  );
};

export default RightSection;
