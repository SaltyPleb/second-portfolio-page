import React from "react";
import settings from "../../static/settings.png";

const leftSection = () => {
  return (
    <div className="left_board">
      <div className="top_progress">
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
      </div>
      <div className="skils">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum
          corrupti, quaerat voluptatum non nihil sapiente accusamus officia
          praesentium ducimus.
        </div>
      </div>

      <div className="bottom_btns">
        <div className="btn">
          <img className="b-icon" src={settings} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={settings} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={settings} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={settings} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={settings} alt="" />
        </div>
      </div>
    </div>
  );
};

export default leftSection;
