import React from "react";
import settings from "../../static/settings.png";
import volumeWhite from "../../static/volume-white.png";
import en from "../../static/en-white.png";
import code from "../../static/code.png";
import db from "../../static/db.png";
import design from "../../static/design.png";

const leftSection = () => {
  return (
    <div className="left_board">
      <div className="top_progress">
        <div className="item">
          <div className="">
            <img className="b-icon" src={volumeWhite} alt="" />
          </div>
          <div className="progress">
            <div className="progress-value first"></div>
            <div className="circle">
              <div className="sic" />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="b-icon" src={settings} alt="" />
          </div>
          <div className="progress">
            <div className="progress-value second"></div>
            <div className="circle">
              <div className="sic" />
            </div>
          </div>
        </div>
      </div>
      <div className="skils">
        <div className="item">
          <div className="">
            <img className="b-icon" src={en} alt="" />
          </div>
          <div className="progress">
            <div className="progress-value third"></div>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="b-icon" src={code} alt="" />
          </div>
          <div className="progress">
            <div className="progress-value"></div>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="b-icon" src={design} alt="" />
          </div>
          <div className="progress">
            <div className="progress-value"></div>
          </div>
        </div>
        <div className="item">
          <div className="">
            <img className="b-icon" src={db} alt="" />
          </div>
          <div className="progress">
            <div className="progress-value"></div>
          </div>
        </div>
      </div>
      <div className="about_text">
        <div className="text">
        Node.JS, React, technical specialist, team lead, project lead. Keen on back-end development using, but also love to produce beautiful and good working front-end part:)
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
