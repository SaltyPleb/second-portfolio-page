import React from "react";
import "../style/navbar.css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftNav/>
      <RightNav/>
    </div>
  );
};

export default Navbar;
