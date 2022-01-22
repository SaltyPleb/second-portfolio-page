import TaskPage from "../components/pages/tasks/TaskPage";
import { ABOUT_ME, MONGO_TASK_PAGE } from "../utils/consts";

export const publicRoutes = [
  { path: ABOUT_ME, element: <TaskPage /> },
  { path: MONGO_TASK_PAGE, element: "" },
];
