import React from "react";
import "./middleWindow.scss";
import settings from "../../static/settings.png";
import finder from "../../static/find.png";
import xmark from "../../static/xmark.png";

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
          <div className="left_board">
            <div className="skils">
              <div className="item">
                <div className="">
                  <img className="b-icon" src={settings} alt="" />
                </div>
                <div className="progress">
                  <div className="progress-value first"></div>
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img className="b-icon" src={settings} alt="" />
                </div>
                <div className="progress">
                  <div className="progress-value second"></div>
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img className="b-icon" src={settings} alt="" />
                </div>
                <div className="progress">
                  <div className="progress-value third"></div>
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img className="b-icon" src={settings} alt="" />
                </div>
                <div className="progress">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img className="b-icon" src={settings} alt="" />
                </div>
                <div className="progress">
                  <div className="progress-value"></div>
                </div>
              </div>
              <div className="item">
                <div className="">
                  <img className="b-icon" src={settings} alt="" />
                </div>
                <div className="progress">
                  <div className="progress-value"></div>
                </div>
              </div>
            </div>
            <div className="about_text">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                laborum corrupti, quaerat voluptatum non nihil sapiente
                accusamus officia praesentium ducimus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleWindow;
