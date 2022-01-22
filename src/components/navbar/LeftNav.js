import React, { useContext } from "react";
import gridIcons from "../../static/grid.png";
import math from "../../static/math.png";
import settings from "../../static/settings.png";
import graph from "../../static/graph.png";
import chat from "../../static/chat.png";
import docs from "../../static/docs.png";
import volume from "../../static/volume.png";
import spotify from "../../static/spotify2.png";
import { Context } from "../..";
import { Link } from "react-router-dom";
import {HOME_PAGE, MONGO_TASK_PAGE}  from "../../utils/consts"

const LeftNav = () => {

  const { backgroundImage } = useContext(Context)
  
  return (
    <div className="left_nav">
      <Link to={HOME_PAGE} className="main_btn" onClick={()=>{backgroundImage.setBluredBackground(!backgroundImage.bluredBackground)}}>
        <img className="icon" src={gridIcons} alt="" />
      </Link>

      <div className="other_btns">
        <a className="btn-primary" href="https://github.com/SaltyPleb/second-portfolio-page" target="_blank" rel="noopener noreferrer">
          <img className="icon" src={math} alt="" />
        </a>
        <div className="btn-primary">
          <img className="icon" src={settings} alt="" />
        </div>
        <div className="btn-primary">
          <img className="icon" src={graph} alt="" />
        </div>
        <Link to={MONGO_TASK_PAGE} className="btn-primary">
          <img className="icon" src={docs} alt="" />
        </Link>
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
