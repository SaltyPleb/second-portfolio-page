import React, { useContext, useEffect } from "react";
import "./taskPageStyle.scss";
import pen from "../../../static/pen.png";
import plus from "../../../static/plus.png";
import redstar from "../../../static/redstar.png";
import bluecalendar from "../../../static/bluecalendar.png";
import message from "../../../static/message.png";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";

const TaskPage = observer(() => {
  const { tasksStore } = useContext(Context);
  const tasks = [
    { bgcolor: "green", tasks: 60, name: "General" },
    { bgcolor: "blue", tasks: 30, name: "Meetings" },
    { bgcolor: "lblue", tasks: 53, name: "Trips" },
  ];
  var selectedType = "";

  useEffect(() => {
  }, [tasksStore.selectedType]);

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
            {tasksStore.types.map((item, index) => (
              <div
                onClick={() => tasksStore.setSelectedType(item.icon)}
                key={index}
                className="type"
              >
                <img src={item.icon} alt="/s" className="icon" />
              </div>
            ))}
          </div>
        </div>
        <div className="tags">
          <div className="selected_type">
            <div className="image">
              <img src={tasksStore.selectedType} alt="/s" className="icon" />
            </div>
          </div>
          <div className="wrapper">
            {tasksStore.tags.map((item, index) => (
              <div
                key={index}
                className={`tag ${item.selected ? "selected" : null}`}
              >
                {item.name}
              </div>
            ))}
            <div
              onClick={() =>
                tasksStore.tags.push({ selected: false, name: "Lol" })
              }
              className="add_tag"
            >
              Add tag
            </div>
          </div>
        </div>
      </div>
      <div className="section__middle"></div>
      <div className="section__right"></div>
    </div>
  );
});

export default TaskPage;
