import React, { useState, useEffect } from "react";

const RightNav = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 100);
  }, []);
  return (
    <div className="right_nav">
      <div className="other_btns">
        <div className="time">
          {dateState.toLocaleString("ru-RU", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
        </div>
      </div>
      <div className="other_btns">
        <div className="time gr">
          {dateState.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
