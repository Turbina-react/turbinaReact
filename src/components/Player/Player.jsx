import classNames from 'classnames';
import {useState} from "react";

import {BtnPause, BtnPlay, BtnArrow, BtnClose} from './index'  // svg
import {Realease, TextSong, ButtonRealease} from './index' // components

const Player = () => {
  const [visiblePlayer, setVisiblePlayer] = useState(false)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [control, setControl] = useState(true)

  const openPlayer = () => setVisiblePlayer(visiblePlayer => !visiblePlayer)
  const handleRealease = (stateVisible) => {
    setVisibleRealease(stateVisible)
  }
  const handleControl = () => setControl(control => !control)

  return (
    <div className="player">
      <div className="controls">
        <i onClick={handleControl}>
          {control ? <BtnPause/> : <BtnPlay/>}
        </i>
      </div>

      <div className="player__wrapper">
        <div className="player__main">
          <div className="player__item">
            <audio></audio>
            <div className="player__details">
              <div className="player__artist-block">
                <p className="player__text">Songname</p>
                <p className="player__dash">&#8212;</p>
                <p className={classNames("player__text player__text_hide")}>Artistname Artistname Artistname</p>
              </div>
              <p className="player__time">1:30</p>
            </div>
            <div className="player__seekbar">
              <input type="range"/>
            </div>
          </div>

          {
            visiblePlayer && <ButtonRealease
              handleRealease={handleRealease}
              text={!visibleRealease ? "Текст песни" : "Релизы"}
            />
          }
        </div>
        {
          visiblePlayer &&
          <div className="player__list">
            <h3 className="player__typeContent">{!visibleRealease ? "Релизы: " : "Текст песни: " } </h3>
            <div className="list">
              {
                !visibleRealease ? <Realease/> : <TextSong/>
              }

            </div>
          </div>
        }
      </div>
      <i className="open-popup" onClick={openPlayer}>
        {!visiblePlayer ? <BtnArrow/> : <BtnClose/>}
      </i>
    </div>
  )
}

export default Player
