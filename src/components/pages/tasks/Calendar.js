import React, { useEffect } from "react";
import { ReactComponent as Time } from "../../../static/time.svg";
import { getDates, getTime, today } from "../../../utils/getDates";
const Calendar = () => {
  const schedule = {};

  const dates = getDates();
  const time = getTime();

  useEffect(() => {}, []);

  return (
    <div className="calendar__wrapper">
      <div className="calendar">
        <div className="top__dates">
          {dates.map((date, index) => (
            <div key={index} className={`date ${today(date.toString())}`}>
              <div className="day">{date.toString().split(" ")[2]}</div>
              <div className="week-day">{date.toString().split(" ")[0]}</div>
            </div>
          ))}
        </div>
        <div className="time_schedule">
          <div className="tasks-time">
            <div className="hours">
              {time.map((time, index) => (
                <div key={index} className="hour">
                  <div className="task-time">{time}</div>
                  <div className="line" />
                </div>
              ))}
            </div>

            <div className="t-wrap">
                <div className="line"></div>
                <div className="task">
                    <div className="task__type">General</div>
                    <div className="task__name">Read reviews</div>
                    <div className="task__time">{time[1]} - {time[3]}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reminder">
        <div className="time_end__ci">
          {/* Need to fill it with time ended percentage */}
        </div>
        <div className="text">
          <div className="task">Help with Sam's </div>
          <div className="date">Tomorrow, 6 p.m.</div>
        </div>
        <Time fill="gray" />
      </div>
    </div>
  );
};

export default Calendar;
