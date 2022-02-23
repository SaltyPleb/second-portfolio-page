import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const Background = observer(() => {
  const { backgroundImage } = useContext(Context);

  return (
    <div className="background">
      <div
        className={`main_background ${
          backgroundImage.bluredBackground ? "blured_background" : ""
        }`}
        style={{ backgroundImage: `url(${backgroundImage.backgroundImage})` }}
      >
        <div className="blur"></div>
      </div>
    </div>
  );
});

export default Background;
