import React from "react";
import settings from "../../static/settings.png";
import volumeWhite from "../../static/volume-white.png";
import en from "../../static/en-white.png";
import code from "../../static/code.png";
import db from "../../static/db.png";
import design from "../../static/design.png";
import ProgressBarWithBall from "./ProgressBar.component.js";

const leftSection = () => {
  const skilsValue = [
    { bgcolor: "#dfa974", completed: 60, icon: en },
    { bgcolor: "#dfa974", completed: 30, icon: code },
    { bgcolor: "#dfa974", completed: 53, icon: design },
    { bgcolor: "#dfa974", completed: 77, icon: db },
  ];
  return (
    <div className="left_board">
      <div className="top_progress">
        <div className="item">
          <img className="b-icon" src={volumeWhite} alt="" />
          <ProgressBarWithBall completed={75} ball={true} bgcolor={"#dfa974"} />
        </div>
        <div className="item">
          <img className="b-icon" src={settings} alt="" />
          <ProgressBarWithBall completed={50} ball={true} bgcolor={"#dfa974"} />
        </div>
      </div>

      <div className="skils">
        {skilsValue.map((item, index) => (
          <div className="item">
            <img key={index} className="b-icon" src={item.icon} alt="" />
            <ProgressBarWithBall
              completed={item.completed}
              bgcolor={item.bgcolor}
            />
          </div>
        ))}
      </div>
      <div className="about_text">
        <div className="text">
          Node.JS, React, technical specialist, team lead, project lead. Keen on
          back-end development using, but also love to produce beautiful and
          good working front-end part:)
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
