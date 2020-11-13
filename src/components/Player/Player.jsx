import {useDispatch, useSelector} from "react-redux";
import Fade from 'react-reveal/Fade';
import {useEffect, useRef, useState} from "react";

import {Details, Seekbar, Playlist, ButtonRealease} from './index' // компоненты
import {BtnPause, BtnPlay, BtnArrow, BtnClose, BtnYouTube,} from './index' // кнопки

import {fetchSongs, indexNextTrack} from "../../redux/actions/songs";
import {activeSong, activeTime} from "../../redux/actions/active";
import throttling from "../../utils/throttling";
import {blurBackground} from "../../redux/actions/blur";
import index from "react-div-100vh";


const Player = () => {
  const [visibleList, setVisibleList] = useState(false)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [coverPlace830, setCoverPlace780] = useState(true)
  const [coverPlace480, setCoverPlace380] = useState(true)
  const MyAudio = useRef();
  const PlayerRef = useRef();
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const indexSong = useSelector(({songs}) => songs.indexSong)
  const {
    choiceActiveSong, // выбранная активная песня
    control,  // вкл / выкл воспроизведение
    timeActive,  // время трека в минутах секундах
    secondsDuration,  // вся длина трека в секундах
    currentTime, // время трека в секундах от 0 до secondsDuration
    equalTime
  } = useSelector(({active}) => active)
  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])
  const openPlayerList = () => {
    setVisibleList(visibleList => !visibleList)
    dispatch(blurBackground((!visibleList && !coverPlace480) ? true : false))
  }

  const handleRealease = (stateVisible) => {
    setVisibleRealease(stateVisible)
  }

  const handleControl = () => {
    const activeControl = startTrack?.audio && MyAudio.current.paused
    dispatch(activeSong(choiceActiveSong, !activeControl))
    activeControl ? MyAudio.current.play() : MyAudio.current.pause()
    MyAudio.current.volume = 0.4

  }

  const startTrack = (function () {
    return Object.keys(choiceActiveSong).length ? choiceActiveSong : songsItems[0]
  }());
// console.log(startTrack)
  const clickHandler = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left
    const persentage = x / rect.width * 100;
    const timeToGo = secondsDuration / 100 * persentage
    MyAudio.current.currentTime = timeToGo

  }
  const onTimeUpdate = throttling((e) => {
    // console.log(11)
    const duration = Math.round(e.target.duration)
    const current = Math.round(e.target.currentTime)
    dispatch(activeTime(duration, current, false))
  }, 1000)


  useEffect(() => {
    handleControl()
  }, [choiceActiveSong])

  useEffect(() => {
    equalTime && nextTrack()
  }, [equalTime])

  useEffect(() => {
    const updateView = () => {
      setCoverPlace780(window.matchMedia("(min-width: 830px)").matches);
      setCoverPlace380(window.matchMedia("(min-width: 480px)").matches);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);


  useEffect(() => {    //
    document.body.addEventListener('click' , handleOutsideClick)
  }, [])
  const handleOutsideClick = e => {
    const findPlayer = e.path.some((item) => item === PlayerRef.current )
    !findPlayer && setVisibleList(false)
  }
  const startTime = (e) => {
    dispatch(activeTime(Math.round(e), 0))
  }

  const nextTrack = () => {
    songsItems.filter((item, index) => {
      if (index === indexSong) {
        const addedIndex = Object.keys(songsItems).length - 1 === indexSong ? 0 : index + 1
        dispatch(activeSong(songsItems[addedIndex], false))
        dispatch(indexNextTrack(addedIndex))
        return item
      }
    })
  }

  return (
    <div className="player" ref={PlayerRef}>
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
          <Fade bottom when={visibleList}>
            <>
              {
                visibleList && !coverPlace480 && <img className="player__cover" src={startTrack?.cover}/>
              }

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
            </>
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