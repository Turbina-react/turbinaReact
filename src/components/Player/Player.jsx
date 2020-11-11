import {useDispatch, useSelector} from "react-redux";
import {CSSTransitionGroup} from 'react-transition-group';
import {useEffect, useRef, useState} from "react";

import {ButtonRealease, Details, Seekbar, Playlist} from './index' // компоненты
import {BtnPause, BtnPlay, BtnArrow, BtnClose, BtnYouTube} from './index' // svg-эшки

import {fetchSongs} from "../../redux/actions/songs";
import {activeSong, activeTime} from "../../redux/actions/active";
import {blurBackground} from "../../redux/actions/blur";
import throttling from "../../utils/throttling";


const Player = () => {

  const [visibleList, setVisibleList] = useState(false)  // видимость плейлиста

  const [visibleRealease, setVisibleRealease] = useState(false) // видимость релизы / текст песни
  const [coverPlace830, setCoverPlace830] = useState(true)
  const [coverPlace480, setCoverPlace480] = useState(true)
  const MyAudio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {
    choiceActiveObj,    // активный объект песни
    timeActive,       // время трека в минутах секундах
    secondsDuration,  // общее время трека в секундах
    control,  // переключатель play / pause
    currentTime, // время трека в секундах от 0 до secondsDuration
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
  const startTrack = (function () {
    return Object.keys(choiceActiveObj).length ? choiceActiveObj : songsItems[0]
  }());

  const handleControl = () => {
    const urlPause = startTrack?.audio && MyAudio.current.paused
    const activeControl = urlPause ? false : !urlPause
    dispatch(activeSong(choiceActiveObj, activeControl))
    urlPause ? MyAudio.current.play() : MyAudio.current.pause()
    MyAudio.current.volume = 0.04  // громкость звука
  }
  useEffect(() => {
    handleControl()
  }, [choiceActiveObj])


  const clickHandler = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left
    const persentage = x / rect.width * 100;
    const timeToGo = secondsDuration / 100 * persentage
    MyAudio.current.currentTime = timeToGo
  }

  const onTimeUpdate = throttling((e) => {   // будущий таймер на трек, еще не настроен и не работает
    const duration = Math.round(e.target.duration)
    const current = Math.round(e.target.currentTime)
    dispatch(activeTime(duration, current))
  }, 1000)


  useEffect(() => {
    const updateView = () => {
      setCoverPlace830(window.matchMedia("(min-width: 830px)").matches);
      setCoverPlace480(window.matchMedia("(min-width: 480px)").matches);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const startTime = (e) => {
    dispatch(activeTime(Math.round(e), 0))
  }

  return (
    <div className="player">
      <CSSTransitionGroup  //анимация на обложку трека
        transitionName="image_anim"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        //transitionAppear={true}
        //transitionAppearTimeout={100}
      >

        {
          coverPlace830 && visibleList && <img className="player__cover" src={startTrack?.cover}/>
        }
      </CSSTransitionGroup>
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
          <CSSTransitionGroup  //анимация
            transitionName="image_anim"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
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
          </CSSTransitionGroup>
        </div>
        <CSSTransitionGroup
          transitionName="image_anim"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {
            visibleList && <Playlist
              startTrack={startTrack}
              coverPlace830={coverPlace830}
              coverPlace480={coverPlace480}
              visibleList={visibleList}
              visibleRealease={visibleRealease}
              songsItems={songsItems}
            />
          }

        </CSSTransitionGroup>
      </div>

      <i className="open-popup" onClick={openPlayerList}>
        {!visibleList ? <BtnArrow/> : <BtnClose/>}
      </i>
    </div>
  )
}

export default Player

