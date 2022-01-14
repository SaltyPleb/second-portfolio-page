import React from "react";
import gridIcons from "../../static/grid.png";
import math from "../../static/math.png";
import settings from "../../static/settings.png";
import graph from "../../static/graph.png";
import chat from "../../static/chat.png";
import docs from "../../static/docs.png";
import volume from "../../static/volume.png";
import spotify from "../../static/spotify2.png";

const LeftNav = () => {
  return (
    <div className="left_nav">
      <div className="main_btn">
        <img className="icon" src={gridIcons} alt="" />
      </div>

      <div className="other_btns">
        <div className="btn-primary" href="#">
          <img className="icon" src={math} alt="" />
        </div>
        <div className="btn-primary">
          <img className="icon" src={settings} alt="" />
        </div>
        <div className="btn-primary">
          <img className="icon" src={graph} alt="" />
        </div>
        <div className="btn-primary">
          <img className="icon" src={docs} alt="" />
        </div>
        <div className="btn-primary">
          <img className="icon" src={chat} alt="" />
        </div>
      </div>

      <div className="other_btns">
        <a href="/#" className="volume">
          <img className="icon" src={volume} alt="" />
        </a>
        <a href="/#">75</a>
        <div className="btn-primary">
          <img className="icon" src={spotify} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
