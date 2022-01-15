import React from "react";
import "./middleWindow.scss";
import settings from "../../static/settings.png";
import finder from "../../static/find.png";
import xmark from "../../static/xmark.png";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

const MiddleWindow = () => {
  return (
    <div className="middle_screen">
      <div className="middle_wrapper">
        <div className="left_top_btns">
          <div className="btn green">
            <img className="b-icon" src={finder} alt="" />
          </div>
          <div className="btn red">
            <img className="b-icon" src={xmark} alt="" />
          </div>
        </div>
        <div className="board">
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default MiddleWindow;