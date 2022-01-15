import React from "react";
import me from "../../static/me.jpg";

const RightSection = () => {
  return (
    <div className="right_board">
      <div className="pic_wrapper">
        <img className="me_image" src={me} alt="" />
        <a href="" className="name">
          @SaltyPleb
        </a>
      </div>
    </div>
  );
};

export default RightSection;
