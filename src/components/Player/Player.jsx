import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";

import {BtnPause, BtnPlay, BtnArrow, BtnClose, BtnYouTube, Details, Seekbar} from './index'
import {useEffect, useRef, useState} from "react";
import {Realease, TextSong, ButtonRealease} from './index'
import {fetchSongs} from "../../redux/actions/songs";
import {activeSong, activeTime} from "../../redux/actions/active";
import throttling from "../../utils/throttling";
import Fade from 'react-reveal/Fade';
import Playlist from "./Playlist";

const Player = () => {
  // http://file-st10.karelia.ru/jvk684/782451e842577e8d700cab73358bb4aa/51655b6d2fbb382fcca39ac154500b40/i_tried_so_hard.mp3
  const [visibleList, setVisibleList] = useState(false)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [control, setControl] = useState(false)
  const [coverPlace830, setCoverPlace780] = useState(true)
  const [coverPlace480, setCoverPlace380] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const MyAudio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {choiceActiveObj, timeActive, secondsDuration} = useSelector(({active}) => active)


  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])
  const openPlayerList = () => setVisibleList(visibleList => !visibleList)
  const handleRealease = (stateVisible) => {
    setVisibleRealease(stateVisible)
  }

  const handleControl = () => {
    const urlPause = startTrack?.audio && MyAudio.current.paused
    // console.log(urlPause)
    const activeControl = urlPause ? false : true
    dispatch(activeSong(choiceActiveObj, activeControl))
    setControl(activeControl)
    urlPause ? MyAudio.current.play() : MyAudio.current.pause()
    MyAudio.current.volume = 0.05
  }


  // console.log(songsItems)
  const startTrack = (function () {
    if (Object.keys(choiceActiveObj).length) {
      return choiceActiveObj
    } else {
      return songsItems[0]
    }
  }());

  const clickHandler = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left
    const persentage = x / rect.width * 100;
    const timeToGo = secondsDuration / 100 * persentage
    MyAudio.current.currentTime = timeToGo
    // console.log(persentage)
    // console.log(timeToGo)
    // console.log(MyAudio.current.currentTime = timeToGo)
  }
  const onTimeUpdate = throttling((e) => {   // будущий таймер на трек, еще не настроен и не работает
    const duration = Math.round(e.target.duration)
    const current = Math.round(e.target.currentTime)
    dispatch(activeTime(duration, current))
    // console.log({ second: new Date(event.timeStamp) })
    setCurrentTime(Math.round(e.target.currentTime))
  }, 1000)
  // console.log(secondsDuration)
  useEffect(() => {
    handleControl()
  }, [choiceActiveObj.audio])

  useEffect(() => {
    const updateView = () => {
      setCoverPlace780(window.matchMedia("(min-width: 830px)").matches);
      setCoverPlace380(window.matchMedia("(min-width: 480px)").matches);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);
  const startTime = (e) => {
    // countdown()
    dispatch(activeTime(Math.round(e), null))
  }


  return (
    <div className="player">
      <Fade bottom when={visibleList}>
        {
          coverPlace830 && visibleList && <img className="player__cover" src={startTrack?.cover}/>
        }
      </Fade>
      <div className="controls">
        <i onClick={handleControl}>
          {control ? <BtnPlay/> : <BtnPause/>}
        </i>
      </div>
      <div className="player__wrapper">
        <div className="player__main">
          <div className="player__item">
            <audio src={startTrack?.audio} ref={MyAudio}
                   onTimeUpdate={onTimeUpdate}
                   onLoadedMetadata={e => startTime(e.target.duration)}
            />
            <Details startTrack={startTrack} timeActive={timeActive}/>
            <Seekbar currentTime={currentTime} secondsDuration={secondsDuration} clickHandler={clickHandler}/>
          </div>
          {
            visibleList && !coverPlace480 && <img className="player__cover" src={startTrack?.cover}/>
          }
          <Fade bottom when={visibleList}>
            {
              visibleList && <div className="player__button-wrapper">
                {
                  visibleList && startTrack?.videoClip !== "" && <BtnYouTube/>
                }
                {
                  visibleList &&
                  <ButtonRealease handleRealease={handleRealease} text={!visibleRealease ? "Текст песни" : "Релизы"}/>
                }
              </div>
            }
          </Fade>
        </div>

        <Fade bottom when={visibleList}>
          {
            visibleList && <Playlist
              startTrack={startTrack}
              coverPlace830={coverPlace830}
              coverPlace480={coverPlace480}
              secondsDuration={secondsDuration}
              currentTime={currentTime}
              visibleList={visibleList}
              visibleRealease={visibleRealease}
              songsItems={songsItems}
            />
          }

        </Fade>

        </div>
        <i className="open-popup" onClick={openPlayerList}>
        {!visibleList ? <BtnArrow/> : <BtnClose/>}
        </i>
        </div>
        )
        }
        export default Player