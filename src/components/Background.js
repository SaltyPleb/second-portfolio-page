import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "..";

const Background = observer(() => {
  const { backgroundImage } = useContext(Context)

  return (
      <div className="background">
        <div
          className={`main_backgroud ${backgroundImage.bluredBackground ? "blured_backgroud" : ""}`}
          style={{ backgroundImage: `url(${backgroundImage.backgroundImage})` }}
        ></div>
      </div>
  );
});

export default Background;
