import React from "react";
import Icon from "../../utils/Icon";

const Player = () => {
  return (
    <div className="player-sp">
      <div className="player">
        <div className="player__img"></div>
        <div className="player__btns">
          <Icon name="icon-heart-o" color="#a5b1c2" size={35}/>
          <Icon name="icon-link" color="#a5b1c2" size={35}/>
          <Icon name="icon-prev" color="#a5b1c2" size={35}/>
          <Icon name="icon-next" color="#a5b1c2" size={35}/>
          <Icon name="icon-pause" color="#FFFFFF" size={60}/>
        </div>
      </div>
      <div className="control">
        <div className="song">
          <div className="song__artist">Broke Mine</div>
          <div className="song__name">Verzache</div>
          <div className="time">
            <div className="time__end">03:32</div>
            <div className="time__line">
              <input type="progress" />
            </div>
            <div className="time__now">00:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
