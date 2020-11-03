import classNames from 'classnames';

import AlbumCoverJpg from '../../assets/img/albumCover.jpg'

const Pleer = () => {
  return (
    <div className="player">
      <div className="player__main">
        <audio></audio>
        {/*<div className="player__thumbnail">*/}
        {/*  <img src={AlbumCoverJpg} alt=""/>*/}
        {/*</div>*/}
        <div className="player__seekbar">
          <input type="range"/>
        </div>
        <div className="player__details">
          <h2>Songname</h2>
          <p>Artistname</p>
        </div>

        <div className="controls">
            <div className="prevControl">
              <i className={classNames("fa faBackward")}></i>
            </div>
          <div className="playPauseControl">
            <i className={classNames("fa faPlay")} ></i>
            <i className={classNames("fa faPause")} ></i>
          </div>
          <div className="nextControl">
            <i className={classNames("fa faForward")}></i>
          </div>
        </div>

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
              <p>Artistname</p>
            </div>
          </div>
          <div className="player__listItem">
            <div className="player__details">
              <h2>Songname</h2>
              <p>Artistname</p>
            </div>
          </div>
          <div className="player__listItem">
            <div className="player__details">
              <h2>Songname</h2>
              <p>Artistname</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pleer