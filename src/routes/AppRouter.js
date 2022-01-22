import React from "react";
import { BrowserRouter as Route, Routes } from 'react-router-dom'
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} component={Component} exact />
      ))}
      <Route path='*' exact component={"nopage"}/>
    </Routes>
  );
};

export default AppRouter;
