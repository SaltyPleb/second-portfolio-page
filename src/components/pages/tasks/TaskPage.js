import React, { useContext, useEffect, useState } from "react";
import "./taskPageStyle.scss";
import pen from "../../../static/pen.png";
import plus from "../../../static/plus.png";
import redstar from "../../../static/redstar.png";
import bluecalendar from "../../../static/bluecalendar.png";
import menu from "../../../static/menu.png";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { configure } from "mobx";

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

  const [tasksState, setTasksState] = useState(tasksStore.tasks);

  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    tasksStore.setTasks(tasksState);
    // console.log(tasksStore.tasks);
  }, [tasksState]);

  const addTask = (text) => {
    if(!text) return
    setTasksState([...tasksState, { task: text, done: false, user: "sam" }]);
    setTextValue("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasksState];
    newTasks[index].done = !newTasks[index].done;
    setTasksState(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasksState];
    newTasks.splice(index, 1);
    setTasksState(newTasks);
  };

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
        <div className="tags">
          <div className="selected_type">
            <div className="image">
              <img src={tasksStore.selectedType} alt="/s" className="icon" />
            </div>
          </div>
          <div className="wrapper">
            {tasksStore.tags.map(({selected, name}, index) => (
              <div
                key={index}
                className={`tag ${selected && "selected"}`}
              >
                {name}
                <div className="xmark"></div>
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
      <div className="section__middle">
        <div className="tasks__wrapper">
          {tasksStore.tasks.map(({done, task}, index) => (
            <div key={index} className="item">
              <div
                onClick={() => toggleTask(index)}
                className={`round ${done ? "checked" : null}`}
              >
                <input type="checkbox" id="checkbox" />
                <label className="checkbox"></label>
              </div>
              <div className={`task ${done ? "checked" : null}`}>
                <div className="text">{task}</div>
                <img src={menu} alt="" className="icon" />
              </div>
            </div>
          ))}

          <div
            onClick={() => {
              // tasksStore.tasks.push({
              //   task: "Help with Sam's project",
              //   done: false,
              //   user: "sam",
              // });
              addTask(textValue);
            }}
            className="add_task"
          >
            <img src={plus} alt="" className="icon" />
            <div className="text">Add subtask</div>
          </div>
          <form>
            <textarea
              className="text"
              placeholder="Type here..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></textarea>
          </form>
        </div>
      </div>
      <div className="section__right"></div>
    </div>
  );
});

export default TaskPage;
