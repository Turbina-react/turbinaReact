import classNames from 'classnames';
import {Howl, Howler} from 'howler'
import {useDispatch, useSelector} from "react-redux";
import AlbumCoverJpg from '../../assets/img/albumCover.jpg'
import iTriedSoHard from '../../assets/songs/i_tried_so_hard.mp3';
import gubkaBob from '../../assets/songs/gubka_bob_2020.mp3';
import insideHerNew from '../../assets/songs/inside_her_new_balenciaga.mp3';
import zvukPostavim from '../../assets/songs/zvuk_postavim_na_vsu_i_sosedi_ne_spat.mp3';

import {pauseSvg, playSvg, arrowTopSvg, closeSvg} from './index'
import {useEffect, useRef, useState} from "react";
import {Realease, TextSong, ButtonRealease} from './index'
import {fetchBurgers} from "../../redux/actions/songs";
import {activeSong} from "../../redux/actions/active";

// const songList = [
//   {
//     // audio: "i_tried_so_hard.mp3",
//     audio: iTriedSoHard,
//     songname: "In the end",
//     artistname: "Fleurie",
//   },
//   {
//     audio: gubkaBob,
//     songname: "Gubka bob",
//     artistname: "bob",
//   },
//   {
//     audio: insideHerNew,
//     songname: "Inside her new Balenciaga",
//     artistname: "FILV",
//   },
//   {
//     audio: zvukPostavim,
//     songname: "Звук поставим на всю",
//     artistname: "Dabro",
//   },
// ]
const Pleer = () => {
  const [visibleList, setVisibleList] = useState(true)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [control, setControl] = useState(false)
  const [play, setPlay] = useState(true)
  const [songUrl, setSongUrl] = useState('')
  const audio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {choiceActiveObj} = useSelector(({active}) => active)

  useEffect(() => {
    dispatch(fetchBurgers())
  }, [])
  const openPlayer = () => setVisibleList(visiblePlayer => !visiblePlayer)
  const handleRealease = (stateVisible) => {
    setVisibleRealease(stateVisible)
  }
  const handleControl = () => {
    const urlPause = choiceActiveObj.audio && audio.current.paused
    console.log(urlPause)
    const activeControl = urlPause ? false : true
    dispatch(activeSong(choiceActiveObj, activeControl))
    setControl(activeControl)
    urlPause ? audio.current.play() : audio.current.pause()
    audio.current.volume = 0.1
    // console.log(audio.current.src, parseInt(audio.current.duration))
  }

  useEffect(() => {
    handleControl()
  }, [choiceActiveObj.audio])

  const handleAddBurderToPlayerMain = (obj) => {
    choiceActiveObj.audio === obj.audio && handleControl()
    dispatch(activeSong(obj, false))
  }

  // console.log("control", control)
  // const sound = new Howl({
  //   src: iTriedSoHard,
  //   preload: true,
  //   volume: 0.2,
  //   onplay: function () {
  //     console.log('Finished!');
  //   }
  // })
  // const soundPlayPause = (url) => {
  //   console.log(url)
  //   setSongUrl(url)
  //   setPlay(play => !play)
  //   audio.current.setAttribute("src", `${url}`)
  //   play ? audio.current.play() : audio.current.pause()
  //
  //   console.log(audio.current)
  //   console.log(audio.current.duration)
  //   console.log(audio.current.volume = 0.2)
  // }
  // Howler.volume(0.1)
  return (
    <div className="player">
      <div className="controls">
        <i className={classNames("fa faPause")}><img
          onClick={handleControl}
          src={control ? playSvg : pauseSvg} alt="audio control"
        /></i>
      </div>

      <div className="player__wrapper">
        <div className="player__main">
          <div className="player__item">
            {/*<audio src={iTriedSoHard} ref={audio}>*/}

            {/*</audio>*/}
            <audio src={choiceActiveObj.audio} ref={audio}/>
            <div className="player__details">
              <div className="player__artist">
                <h2>{choiceActiveObj.artistname}</h2>
                <p className="dash">&#8212;</p>
                <p className="player__artistName">{choiceActiveObj.songname}</p>
              </div>
              <p className="player__time">1:30</p>
            </div>
            <div className="player__seekbar">
              <input type="range"/>
            </div>
          </div>

          {
            visibleList && <ButtonRealease
              handleRealease={handleRealease}
              text={!visibleRealease ? "Текст песни" : "Релизы"}
            />
          }
        </div>
        {
          visibleList &&
          <div className={classNames("player__list")}>
            <h3 className="player__typeContent">Релизы: </h3>
            <div className="list"
              // onClick={() => soundPlayPause('item.audio')}
            >

              {
                !visibleRealease ?
                  (
                    songsItems.map((obj, index) => <Realease
                      onClickAddBurger={handleAddBurderToPlayerMain}
                      {...obj}
                    />)
                  )

                  : <TextSong/>
              }

            </div>
          </div>
        }
        {

        }
      </div>

      <img
        onClick={openPlayer}
        className="openPopup" src={!visibleList ? arrowTopSvg : closeSvg} alt=""/>
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