import React, { useState, useEffect, useContext } from "react";
import { Context } from "../..";
import layers from "../../static/layers.png";
import logo1 from "../../static/logo1.jpg";
import logo2 from "../../static/logo2.jpg";

const RightNav = () => {
  const backgroundImages = [logo1, logo2];

  const { backgroundImage } = useContext(Context);

  const [currentImage, setCurrentImage] = useState(0);

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
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
          <img src={layers} className="icon" />
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
