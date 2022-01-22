import React from "react";
import { Route, Routes } from 'react-router-dom'
import NoPage from "../components/pages/404/no-page";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element: Element }) => (
        <Route key={path} element={Element} exact />
      ))}
      <Route path='*' exact element={NoPage}/>
    </Routes>
  );
};

export default AppRouter;
