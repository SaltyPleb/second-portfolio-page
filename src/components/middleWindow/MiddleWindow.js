import React, { useContext } from "react";
import "./middleWindow.scss";
import finder from "../../static/find.png";
import xmark from "../../static/xmark.png";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const MiddleWindow = observer(() => {
  const { backgroundImage } = useContext(Context)

  return (
    <div className={`middle_screen ${backgroundImage.bluredBackground ? "board-show" : "board-hide"}`}>
      <div className="middle_wrapper">
        <div className="left_top_btns">
          <div className="btn green">
            <img className="b-icon" src={finder} alt="" />
          </div>
          <div className="btn red">
            <img className="b-icon" src={xmark} alt="" />
          </div>
        </div>
        <div className={`board`}>
        {/* <div className={`board ${backgroundImage.bluredBackground ? "board-show" : "board-hide"}`}> */}
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
});

export default MiddleWindow;
