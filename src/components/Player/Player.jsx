import classNames from 'classnames';
import {Howl, Howler} from 'howler'
import {useDispatch, useSelector} from "react-redux";

import {BtnPause, BtnPlay, BtnArrow, BtnClose} from './index'
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
const Player = () => {
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
  const openPlayer = () => setVisibleList(visibleList => !visibleList)
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
  console.log(control)
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
            <audio src={choiceActiveObj.audio} ref={audio}/>
            <div className="player__details">
              <div className="player__artist-block">
                <p className="player__text">{choiceActiveObj.artistname}</p>
                <p className="player__dash">&#8212;</p>
                <p className={classNames("player__text player__text_hide")}>{choiceActiveObj.songname}</p>
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
          <div className="player__list">
            <h3 className="player__typeContent">{!visibleRealease ? "Релизы: " : "Текст песни: " } </h3>
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

      <i className="open-popup" onClick={openPlayer}>
        {!visibleList ? <BtnArrow/> : <BtnClose/>}
      </i>
    </div>
  )
}

export default Player

