import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";

import {BtnPause, BtnPlay, BtnArrow, BtnClose} from './index'
import {useEffect, useRef, useState} from "react";
import {Realease, TextSong, ButtonRealease} from './index'
import {fetchBurgers} from "../../redux/actions/songs";
import {activeSong, activeTime} from "../../redux/actions/active";
import throttling from "../../utils/throttling";

const Player = () => {
  // http://file-st10.karelia.ru/jvk684/782451e842577e8d700cab73358bb4aa/51655b6d2fbb382fcca39ac154500b40/i_tried_so_hard.mp3
  const [visibleList, setVisibleList] = useState(false)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [control, setControl] = useState(false)
  // const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const MyAudio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {choiceActiveObj, timeActive, secondsDuration} = useSelector(({active}) => active)
  const ab = useSelector(({active}) => active)
  // console.log(timeActiv)

  useEffect(() => {
    dispatch(fetchBurgers())
  }, [dispatch])
  const openPlayer = () => setVisibleList(visibleList => !visibleList)
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
  console.log(control)


  // console.log(currentTime)
  const startTrack = (function () {
    const a = songsItems[0]
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

  const startTime = (e) => {
    // countdown()
    dispatch(activeTime(Math.round(e), null))
  }

  const handleAddBurderToPlayerMain = (obj) => {
    choiceActiveObj.audio === obj.audio && handleControl()
    dispatch(activeSong(obj, false))
  }

  return (
    <div className="player">
      <div className="controls">
        <i onClick={handleControl}>
          {control ? <BtnPlay/> : <BtnPause/> }
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
            <div className="player__details">
              <div className="player__artist-block">
                {
                  <p className="player__text">{startTrack?.artistname}</p>
                }
                <p className="player__dash">&#8212;</p>
                <p className={classNames("player__text player__text_hide")}>{startTrack?.songname}</p>
              </div>
              {

              }
              <p className="player__time">{timeActive}</p>
            </div>
            <div className="player__seekbar" onClick={clickHandler}>
              <div className="player__timeline"

              />
              <div className="player__timeline-bar"
              style={{
                width: `${currentTime / secondsDuration * 100}%`
              }}
              />

              {/*<input type="range"/>*/}
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
            <h3 className="player__typeContent">{!visibleRealease ? "Релизы: " : "Текст песни: "} </h3>
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

                  : <TextSong choiceActiveText={startTrack?.text}/>
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

