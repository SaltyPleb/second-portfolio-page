import React from "react";
import "../../style/navbar.css";
import LeftNav from "../navbar/LeftNav";
import RightNav from "../navbar/RightNav";

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftNav/>
      <RightNav/>
    </div>
  );
};

export default Navbar;
