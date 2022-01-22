import "./style/style.css";
import Navbar from "./components/navbar/Navbar";
import { Context } from ".";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./components/pages/tasks/TaskPage";
import First from "./components/pages/main/MainPage";
import MiddleWindow from "./components/middleWindow/MiddleWindow";

const Main = observer(() => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <AppRouter /> */}
        <Route path="/tasks" exact element={<TaskPage />} />
        <Route path="/main" exact element={<TaskPage />} />
        {/* <Route path='/main-window' exact element={<MiddleWindow />}/> */}
        <Route path="/" exact element={<First />} />
      </Routes>
    </Router>
  );
});

export default Main;
