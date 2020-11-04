import classNames from 'classnames';

import AlbumCoverJpg from '../../assets/img/albumCover.jpg'
import pausePng from '../../assets/img/pause1.svg';
import Button from "../Button";
import {useState} from "react";

const Pleer = () => {
  const [completed, setCompleted] = useState(false)

  return (
    <div className="player">
      <div className="controls">
        <i className={classNames("fa faPlay")}></i>
        <i className={classNames("fa faPause")}><img src={pausePng} alt=""/></i>
      </div>

      <div className="player__wrapper">
        <div className="player__main">
          <div className="player__item">
            <audio></audio>
            {/*<div className="player__thumbnail">*/}
            {/*  <img src={AlbumCoverJpg} alt=""/>*/}
            {/*</div>*/}
            <div className="player__details">
              <h2>Songname</h2>
              <p>&#8212;</p>
              <p>Artistname</p>
            </div>
            <div className="player__seekbar">
              <input type="range"/>
            </div>
            {/*<div className="controls">*/}
            {/*<div className="prevControl">*/}
            {/*  <i className={classNames("fa faBackward")}></i>*/}
            {/*</div>*/}

            {/*<div className="nextControl">*/}
            {/*  <i className={classNames("fa faForward")}></i>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>

          <Button text="Текст песни"/>
        </div>
        <div className="player__list">
          <div className="player__toggleList">
            <i className={classNames("fa faAngleUp")}></i>
            <i className={classNames("fa faAngleDown")}></i>
          </div>
          <div className="list">

            <div className="player__listItem">
              <div className="player__details">
                <h2>Songname</h2>
                <p>&#8212;</p>
                <p>Artistname</p>
              </div>
            </div>
            <div className="player__listItem">
              <div className="player__details">
                <h2>Songname</h2>
                <p>&#8212;</p>
                <p>Artistname</p>
              </div>
            </div>
            <div className="player__listItem">
              <div className="player__details">
                <h2>Songname</h2>
                <p>&#8212;</p>
                <p>Artistname</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="checkbox">
        <input
          // onChange={(e) => changeCheckbox(e)}
          id={`task-id`}
          type="checkbox"
          checked={completed}
        />
        <label htmlFor={`task-id`}>
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#767676" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </label>
      </div>
    </div>
  )
}

export default Pleer