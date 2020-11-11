import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
// import { v4 as uuidv4 } from 'uuid';
import {BtnPause, BtnPlay, BtnArrow, BtnClose, BtnYouTube, Details, Seekbar} from './index'
import {useEffect, useRef, useState} from "react";
import {Realease, TextSong, ButtonRealease} from './index'
import {fetchBurgers} from "../../redux/actions/songs";
import {activeSong, activeTime} from "../../redux/actions/active";
import throttling from "../../utils/throttling";
import {CSSTransitionGroup} from 'react-transition-group';
import {blurBackground} from "../../redux/actions/blur";

const Player = () => {

  const [visibleList, setVisibleList] = useState(false)  // видимость плейлиста
  const [visibleRealease, setVisibleRealease] = useState(false) // видимость релизы / текст песни
  const [control, setControl] = useState(false)  // переключатель play / pause
  const [coverPlace780, setCoverPlace780] = useState(true)
  const [coverPlace380, setCoverPlace380] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const MyAudio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {choiceActiveObj, timeActive, secondsDuration} = useSelector(({active}) => active)
// console.log(uuidv4())
  useEffect(() => {
    dispatch(fetchBurgers())
  }, [dispatch])
  const openPlayerList = () => {
    setVisibleList(visibleList => !visibleList)
    dispatch(blurBackground((!visibleList && !coverPlace380) ? true : false))
  }
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
    MyAudio.current.volume = 0
  }


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
    dispatch(activeTime(Math.round(e), null))
  }
  const handleAddTrackToPlayerMain = (obj) => {
    choiceActiveObj.audio === obj.audio && handleControl()
    dispatch(activeSong(obj, false))
  }
  return (
    <div className="player">
      <CSSTransitionGroup
        transitionName="image_anim"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        //transitionAppear={true}
        //transitionAppearTimeout={100}
      >
        {
          coverPlace780 && visibleList && <img className="player__cover" src={startTrack?.cover}/>
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
              // onPlay={startTime}
                   onLoadedMetadata={e => startTime(e.target.duration)}
            />
            <Details startTrack={startTrack} timeActive={timeActive}/>
            <Seekbar currentTime={currentTime} secondsDuration={secondsDuration} clickHandler={clickHandler}/>
          </div>
          {
            visibleList && !coverPlace380 && <img className="player__cover" src={startTrack?.cover}/>
          }
          <CSSTransitionGroup
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
            visibleList &&
            <div className="player__list">
              {
                !coverPlace780 && visibleList && coverPlace380 &&
                <img className="player__cover" src={startTrack?.cover}/>
              }
              <div className="player__list-items">
                <h3 className="player__typeContent">{!visibleRealease ? "Релизы: " : "Текст песни: "} </h3>
                <div className="player__list-item"
                  // onClick={() => soundPlayPause('item.audio')}
                >
                  {
                    !visibleRealease ?
                      (
                        songsItems.map((obj, index) => <Realease
                          onClickAddTrack={handleAddTrackToPlayerMain}
                          visibleList={visibleList}
                          startTrack={startTrack}
                          {...obj}
                        />)
                      )

                      : <TextSong choiceActiveText={startTrack?.text}/>
                  }

                </div>
              </div>
            </div>
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