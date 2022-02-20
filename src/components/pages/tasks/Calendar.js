import React, { useEffect } from "react";
import { ReactComponent as Time } from "../../../static/time.svg";
import { getDates, getTime, today } from "../../../utils/getDates";
const Calendar = () => {
  const dates = getDates();
  const time = getTime();

  const schedule = [
    // only for tests, delete later!
    {
      type: "Trips",
      color: "orange",
      task: "Went toilet",
      timeStart: time[0],
      timeEnd: time[2],
      margin: "margin-0",
      hours: 2,
    },
    {
      type: "Trips",
      color: "orange",
      task: "Went toilet",
      timeStart: time[0],
      timeEnd: time[2],
      margin: "margin-0",
      hours: 2,
    },
    {
      type: "Trips",
      color: "orange",
      task: "Went toilet",
      timeStart: time[0],
      timeEnd: time[2],
      margin: "margin-0",
      hours: 2,
    },
  ];

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

            {/* {schedule.map(
              (
                { type, color, task, timeStart, timeEnd, margin, hours },
                index
              ) => (
                <div className={`t-wrap ${color} ${margin} hours-${hours}`}>
                  <div className="line"></div>
                  <div className="task">
                    <div className="task__type">Trips</div>
                    <div className="task__name">Went toilet</div>
                    <div className="task__time">
                      {time[0]} - {time[2]}
                    </div>
                  </div>
                </div>
              )
            )} */}

            <div className="t-wrap orange margin-0 hours-2">
              <div className="line"></div>
              <div className="task">
                <div className="task__type">Trips</div>
                <div className="task__name">Went toilet</div>
                <div className="task__time">
                  {time[0]} - {time[2]}
                </div>
              </div>
            </div>

            <div className="t-wrap green left-2 margin-1 hours-1">
              <div className="line "></div>
              <div className="task">
                <div className="task__type">General</div>
                <div className="task__name">Read reviews</div>
                <div className="task__time">
                  {time[1]} - {time[2]}
                </div>
              </div>
            </div>

            <div className="t-wrap blue left-1 margin-4 hours-2">
              <div className="line "></div>
              <div className="task">
                <div className="task__type">Meeting</div>
                <div className="task__name">Prepare documents</div>
                <div className="task__time">
                  {time[4]} - {time[6]}
                </div>
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
