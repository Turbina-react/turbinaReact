import classNames from 'classnames';

import AlbumCoverJpg from '../../assets/img/albumCover.jpg'
import {pauseSvg, playSvg, arrowTopSvg, closeSvg} from './index'
import {useState} from "react";
import {Realease, TextSong, ButtonRealease} from './index'

const Pleer = () => {
  const [visiblePlayer, setVisiblePlayer] = useState(false)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [control, setControl] = useState(true)

  const openPlayer = () => setVisiblePlayer(visiblePlayer => !visiblePlayer)
  const handleRealease = (stateVisible) => {setVisibleRealease(stateVisible)}
  const handleControl = () => setControl(control => !control)

  return (
    <div className="player">
      <div className="controls">
        <i className={classNames("fa faPause")}><img
          onClick={handleControl}
          src={control ? pauseSvg : playSvg} alt="audio control"
        /></i>
      </div>

      <div className="player__wrapper">
        <div className="player__main">
          <div className="player__item">
            <audio></audio>
            <div className="player__details">
              <div className="player__artist">
                <h2>Songname</h2>
                <p className="dash">&#8212;</p>
                <p className="player__artistName">Artistname Artistname Artistname</p>
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
          <div className={classNames("player__list")}>
            <p className="player__typeContent">Релизы: </p>
            <div className="list">
              {
                !visibleRealease ? <Realease/> : <TextSong/>
              }

            </div>
          </div>
        }
      </div>

      <img
        onClick={openPlayer}
        className="openPopup" src={!visiblePlayer ? arrowTopSvg : closeSvg} alt=""/>
    </div>
  )
}

export default Pleer


// import classNames from 'classnames';
//
// import AlbumCoverJpg from '../../assets/img/albumCover.jpg'
// import pausePng from '../../assets/img/pause1.svg';
// import arrowTopSvg from '../../assets/img/arrowTop.svg';
// import Button from "../Button";
// import {useState} from "react";
//
// const Pleer = () => {
//   const [completed, setCompleted] = useState(false)
//
//   return (
//     <div className="player">
//       <div className="controls">
//         <i className={classNames("fa faPlay")}></i>
//         <i className={classNames("fa faPause")}><img src={pausePng} alt=""/></i>
//       </div>
//
//       <div className="player__wrapper">
//         <div className="player__main">
//           <div className="player__item">
//             <audio></audio>
//             {/*<div className="player__thumbnail">*/}
//             {/*  <img src={AlbumCoverJpg} alt=""/>*/}
//             {/*</div>*/}
//             <div className="player__details">
//               <h2>Songname</h2>
//               <p className="dash">&#8212;</p>
//               <p>Artistname</p>
//             </div>
//             <div className="player__seekbar">
//               <input type="range"/>
//             </div>
//             {/*<div className="controls">*/}
//             {/*<div className="prevControl">*/}
//             {/*  <i className={classNames("fa faBackward")}></i>*/}
//             {/*</div>*/}
//
//             {/*<div className="nextControl">*/}
//             {/*  <i className={classNames("fa faForward")}></i>*/}
//             {/*</div>*/}
//             {/*</div>*/}
//           </div>
//
//           <Button text="Текст песни"/>
//         </div>
//         <div className="player__list">
//           <div className="player__toggleList">
//             <i className={classNames("fa faAngleUp")}></i>
//             <i className={classNames("fa faAngleDown")}></i>
//           </div>
//           <div className="list">
//
//             <div className="player__listItem">
//               <div className="player__details">
//                 <h2>Songname</h2>
//                 <p className="dash">&#8212;</p>
//                 <p>Artistname</p>
//               </div>
//             </div>
//             <div className="player__listItem">
//               <div className="player__details">
//                 <h2>Songname</h2>
//                 <p className="dash">&#8212;</p>
//                 <p>Artistname</p>
//               </div>
//             </div>
//             <div className="player__listItem">
//               <div className="player__details">
//                 <h2>Songname</h2>
//                 <p className="dash">&#8212;</p>
//                 <p>Artistname</p>
//               </div>
//             </div>
//
//           </div>
//         </div>
//       </div>
//
//       <img className="openPopup" src={arrowTopSvg} alt=""/>
//       {/*<div className="checkbox">*/}
//       {/*  <input*/}
//       {/*    id={`task-id`}*/}
//       {/*    type="checkbox"*/}
//       {/*    checked={completed}*/}
//       {/*  />*/}
//       {/*  <label htmlFor={`task-id`}>*/}
//       {/*    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
//       {/*      <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#767676" strokeWidth="1.5"*/}
//       {/*            strokeLinecap="round" strokeLinejoin="round"/>*/}
//       {/*    </svg>*/}
//
//       {/*  </label>*/}
//       {/*</div>*/}
//     </div>
//   )
// }
//
// export default Pleer