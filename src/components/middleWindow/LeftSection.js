import React, { useState } from "react";
import settings from "../../static/settings.png";
import volumeWhite from "../../static/volume-white.png";
import en from "../../static/en-white.png";
import code from "../../static/code.png";
import db from "../../static/db.png";
import design from "../../static/design.png";
import ProgressBar from "./ProgressBar.component.js";
import power from "../../static/power.png";
import sync from "../../static/sync.png";
import moon from "../../static/moon.png";
import logout from "../../static/logout.png";
import lock from "../../static/lock.png";

const LeftSection = () => {
  const skilsValue = [
    { bgcolor: "#dfa974", completed: 60, icon: en },
    { bgcolor: "#dfa974", completed: 30, icon: code },
    { bgcolor: "#dfa974", completed: 53, icon: design },
    { bgcolor: "#dfa974", completed: 77, icon: db },
  ];

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  return (
    <div className="left_board">
      <div className="top_progress">
        <div className="item">
          <img className="b-icon" src={volumeWhite} alt="" />
          <ProgressBar completed={75} ball={true} bgcolor={"#dfa974"} />
        </div>
        <div className="item">
          <img className="b-icon" src={settings} alt="" />
          <ProgressBar completed={50} ball={true} bgcolor={"#dfa974"} />
        </div>
      </div>

      <div className="skils">
        {skilsValue.map((item, index) => (
          <div kay={index} className="item">
            <img className="b-icon" src={item.icon} alt="" />
            <ProgressBar
              key={index}
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
          <img className="b-icon" src={power} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={sync} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={moon} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={logout} alt="" />
        </div>
        <div className="btn">
          <img className="b-icon" src={lock} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
