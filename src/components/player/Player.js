import React from "react";
import Icon from "../../utils/Icon";

const Player = () => {
  return (
    <div className="player-sp">
      <div className="player">
        <div
          className="player__img"
          style={{
            backgroundImage:
              "url(" +
              "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg" +
              ")",
          }}
        >
          {/* style="background-image: url("https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg");" */}
        </div>
        <div className="player-btns">
          <div className="player-btns__item">
            <Icon name="icon-heart-o" color="#a5b1c2" size={35} />
          </div>
          <div className="player-btns__item">
            <Icon name="icon-link" color="#a5b1c2" size={35} />
          </div>
          <div className="player-btns__item">
            <Icon name="icon-prev" color="#a5b1c2" size={35} />
          </div>
          <div className="player-btns__item">
            <Icon name="icon-next" color="#a5b1c2" size={35} />
          </div>
          <div className="player-btns__item -xl">
            <Icon name="icon-pause" color="#FFFFFF" size={95} />
          </div>
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
