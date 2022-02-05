import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import menu from "../../../static/menu.png";
import plus from "../../../static/plus.png";

const Tasks = () => {
  const { tasksStore } = useContext(Context);

  const [tasksState, setTasksState] = useState(tasksStore.tasks);

  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    tasksStore.setTasks(tasksState);
    // console.log(tasksStore.tasks);
  }, [tasksState]);

  const addTask = (text) => {
    if (!text) return;
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
    <div className="tasks__wrapper">
      {tasksStore.tasks.map(({ done, task }, index) => (
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
  );
};

export default Tasks;
