import React from "react";
import bot from "../../static/bot.png";
import telegram from "../../static/telegram.png";
import inst from "../../static/inst.png";
import gitcat from "../../static/gitcat.png";
import gitlab from "../../static/gitlab.png";
import books from "../../static/books.png";

const MiddleSection = () => {
  return (
    <div className="middle_board">
      <div className="links">
        <div className="item">
          <img className="b-icon" src={bot} alt="" />
        </div>
        <div className="item">
          <img className="b-icon" src={telegram} alt="" />
        </div>
        <div className="item">
          <img className="b-icon" src={inst} alt="" />
        </div>
        <div className="item">
          <img className="b-icon" src={gitcat} alt="" />
        </div>
        <div className="item">
          <img className="b-icon" src={gitlab} alt="" />
        </div>
        <div className="item">
          <img className="b-icon" src={books} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
