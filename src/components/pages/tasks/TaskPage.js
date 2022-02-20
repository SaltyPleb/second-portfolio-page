import React, { useContext, useEffect, useState } from "react";
import "./taskPage.scss";
import pen from "../../../static/pen.png";
import plus from "../../../static/plus.png";
import redstar from "../../../static/redstar.png";
import bluecalendar from "../../../static/bluecalendar.png";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { configure } from "mobx";
import Tags from "./Tags";
import Tasks from "./Tasks";
import Graph from "./Graph";
import Reminders from "./Reminders";
import Calendar from "./Calendar";

const TaskPage = observer(() => {
  configure({
    enforceActions: "never",
  });

  const { tasksStore } = useContext(Context);
  const groups = [
    { bgcolor: "green", tasks: 60, name: "General" },
    { bgcolor: "blue", tasks: 30, name: "Meetings" },
    { bgcolor: "lblue", tasks: 53, name: "Trips" },
  ];

  return (
    <div className="task_page_container">
      <div className="section__left">
        <div className="groups">
          {groups.map(({bgcolor, name, tasks}, index) => (
            <div key={index} className="group">
              <div className={`color ${bgcolor}`} />
              <div className="item">
                <div className="name">{name}</div>
                <div className="tasks_count">{tasks} tasks</div>
              </div>
              <img className="icon" src={pen} alt="/s" />
            </div>
          ))}
        </div>
        <div className="create-gpoup">
          <img src={plus} alt="/s" className="plus" />
          CREATE NEW GROUP
        </div>
        <div className="selectors">
          <div className="days">
            <div className="days__today">
              <img src={redstar} alt="" className="icon" /> Today
            </div>
            <div className="days__tomorrow">
              <img src={bluecalendar} alt="" className="icon" /> Tomorrow
            </div>
          </div>
          <div className="types">
            {tasksStore.types.map(({icon}, index) => (
              <div
                onClick={() => tasksStore.setSelectedType(icon)}
                key={index}
                className="type"
              >
                <img src={icon} alt="/s" className="icon" />
              </div>
            ))}
          </div>
        </div>
        <Tags />
      </div>
      <div className="section__middle">
        <Reminders />
        <Tasks />
        <Graph />
      </div>
      <div className="section__right">
        <Calendar />
      </div>
    </div>
  );
});

export default TaskPage;
