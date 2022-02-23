import Navbar from "./components/navbar/Navbar";
import { Context } from ".";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./components/pages/tasks/TaskPage";
import First from "./components/pages/main/MainPage";
import MiddleWindow from "./components/middleWindow/MiddleWindow";
import { HOME_PAGE, MONGO_TASK_PAGE } from "./utils/consts";

const Main = observer(() => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <AppRouter /> */}
        <Route path={MONGO_TASK_PAGE} exact element={<TaskPage />} />
        <Route path={MONGO_TASK_PAGE} exact element={<TaskPage />} />
        {/* <Route path='/main-window' exact element={<MiddleWindow />}/> */}
        <Route path={HOME_PAGE} exact element={<First />} />
      </Routes>
    </Router>
  );
});

export default Main;
