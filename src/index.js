import React, { createContext } from "react";
import ReactDOM from "react-dom";
import Background from "./components/Background";
import Main from "./Main";
import BackgroundStore from "./store/BackgroundStore.js";
import TasksStore from "./store/TasksStore.js";
import "./scss/style.scss"

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ backgroundImage: new BackgroundStore(), tasksStore: new TasksStore() }}>
    <React.StrictMode>
      <Background />
      <Main />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById("root")
);
