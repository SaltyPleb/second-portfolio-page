import React from "react";
import gridIcons from "../static/grid.png";
import math from "../static/math.png";
import settings from "../static/settings.png";
import graph from "../static/graph.png";
import chat from "../static/chat.png";
import docs from "../static/docs.png";
import volume from "../static/volume.png";
import spotify from "../static/spotify2.png";

const LeftNav = () => {
  return (
    <div className="left_nav">
      <div className="main_btn">
        <img className="icon" src={gridIcons} alt="" />
      </div>

      <div className="other_btns">
        <a className="btn-primary">
          <img className="icon" src={math} alt="" />
        </a>
        <a className="btn-primary">
          <img className="icon" src={settings} alt="" />
        </a>
        <a className="btn-primary">
          <img className="icon" src={graph} alt="" />
        </a>
        <a className="btn-primary">
          <img className="icon" src={docs} alt="" />
        </a>
        <a className="btn-primary">
          <img className="icon" src={chat} alt="" />
        </a>
      </div>

      <div className="other_btns">
        <a className="volume">
          <img className="icon" src={volume} alt="" />
        </a>
        <a>75</a>
        <a className="btn-primary">
          <img className="icon" src={spotify} alt="" />
        </a>
      </div>
    </div>
  );
};

export default LeftNav;
