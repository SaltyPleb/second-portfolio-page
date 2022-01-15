import React from "react";
import bot from "../../static/bot.png";
import telegram from "../../static/telegram.png";
import inst from "../../static/inst.png";
import gitcat from "../../static/gitcat.png";
import gitlab from "../../static/gitlab.png";
import books from "../../static/books.png";
import pc from "../../static/pc.png";

const MiddleSection = () => {
  return (
    <div className="middle_board">
      <div className="top_middle_board">
        <div className="links">
          <a href="https://resume.github.io/?saltypleb" target="_blank" className="item" rel="noopener noreferrer">
            <img className="b-icon" src={bot} alt="" />
          </a>
          <a href="https://t.me/Evjentiy" target="_blank" className="item" rel="noopener noreferrer">
            <img className="b-icon" src={telegram} alt="" />
          </a>
          <a href="https://www.instagram.com/saltyplebxedd/" target="_blank" className="item" rel="noopener noreferrer">
            <img className="b-icon" src={inst} alt="" />
          </a>
          <a href="https://github.com/SaltyPleb" target="_blank" className="item" rel="noopener noreferrer">
            <img className="b-icon" src={gitcat} alt="" />
          </a>
          <a href="https://github.com/" target="_blank" className="item" rel="noopener noreferrer">
            <img className="b-icon" src={gitlab} alt="" />
          </a>
          <a href="https://github.com/" target="_blank" className="item" rel="noopener noreferrer">
            <img className="b-icon" src={books} alt="" />
          </a>
        </div>
      </div>

      <div className="jst_btns">
        <div className="btn">
          <div className="text">Home</div>
        </div>
        <div className="btn">
          <div className="text">Pictures</div>
        </div>
        <div className="btn">
          <div className="text">Documents</div>
        </div>
        <div className="btn">
          <div className="text">Projects</div>
        </div>
        <div className="btn">
          <div className="text">Jobs</div>
        </div>
        <div className="btn">
          <div className="text">Settings</div>
        </div>
      </div>

      <div className="middle_bottom_card">
        <div className="item">
          <img className="b-icon" src={pc} alt="" />
          <div className="text">4 hours 27 minute</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
