import React, { useState, useEffect, useContext } from "react";
import { Context } from "../..";
import layers from "../../static/layers.png";
import bg1 from "../../static/bg1.jpg";
import bg2 from "../../static/bg2.jpg";

const RightNav = () => {
  const backgroundImages = [bg1, bg2];

  const { backgroundImage } = useContext(Context);

  const [currentImage, setCurrentImage] = useState(0);

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    backgroundImage.setBackgroundImage(getImage());
    setInterval(() => setDateState(new Date()), 100);
  }, []);

  const getImage = () => {
    setCurrentImage(currentImage + 1);
    return backgroundImages[currentImage % backgroundImages.length];
  };

  return (
    <div className="right_nav">
      <div className="other_btns">
        <div
          className="btn-primary"
          onClick={() => backgroundImage.setBackgroundImage(getImage())}
        >
          <img src={layers} className="icon" alt="" />
        </div>
      </div>
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
