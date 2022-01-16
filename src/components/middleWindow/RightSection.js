import React, { useState } from "react";
import me from "../../static/me.jpg";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const RightSection = () => {
  const [imgloaded, setImgloaded] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <div className="right_board">
      <div className="pic_wrapper">
        <img
          className="me_image"
          src={me}
          alt=""
          style={imgloaded ? {} : { display: "none" }}
          onLoad={() => setImgloaded(!imgloaded)}
        />
        <a href="" className="name">
          @SaltyPleb
        </a>
        <a href="" className="name green">
          #openMind #porfolioPage
        </a>
        <a href="" className="name rainbow_text">
          #react #scss #styled-components
        </a>
      </div>
      <div className="calendar">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        {/* <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p> */}
      </div>
    </div>
  );
};

export default RightSection;
