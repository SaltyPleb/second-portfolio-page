import React from "react";
import "./taskPageStyle.scss";
import pen from "../../../static/pen.png";
import plus from "../../../static/plus.png";

const TaskPage = () => {
  const tasks = [
    { bgcolor: "green", tasks: 60, name: "General" },
    { bgcolor: "blue", tasks: 30, name: "Meetings" },
    { bgcolor: "lblue", tasks: 53, name: "Trips" },
  ];

  return (
    <div className="task_page_container">
      <div className="section__left">
        <div className="groups">
          {tasks.map((item, index) => (
            <div key={index} className="group">
              <div className={`color ${item.bgcolor}`} />
              <div className="item">
                <div className="name">{item.name}</div>
                <div className="tasks_count">{item.tasks} tasks</div>
              </div>
              <img className="icon" src={pen} alt="/s" />
            </div>
          ))}
        </div>
        <div className="create-gpoup">
          <img src={plus} alt="/s" className="plus" />
          CREATE NEW GROUP
        </div>
        <div className="days">
          <div className="today"></div>
          <div className="tomorrow"></div>
        </div>
        <div className="types">
          <div className="type"></div>
          <div className="type"></div>
          <div className="type"></div>
          <div className="type"></div>
        </div>
        <div className="tags"></div>
      </div>
      <div className="section__middle"></div>
      <div className="section__right"></div>
    </div>
  );
};

export default TaskPage;
