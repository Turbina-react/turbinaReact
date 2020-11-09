import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";

import {BtnPause, BtnPlay, BtnArrow, BtnClose} from './index'
import {useEffect, useRef, useState} from "react";
import {Realease, TextSong, ButtonRealease} from './index'
import {fetchBurgers} from "../../redux/actions/songs";
import {activeSong, activeTime} from "../../redux/actions/active";

const Player = () => {
  // http://file-st10.karelia.ru/jvk684/782451e842577e8d700cab73358bb4aa/51655b6d2fbb382fcca39ac154500b40/i_tried_so_hard.mp3
  const [visibleList, setVisibleList] = useState(true)
  const [visibleRealease, setVisibleRealease] = useState(false)
  const [control, setControl] = useState(false)
  const audio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {choiceActiveObj, timeActiv, seconds} = useSelector(({active}) => active)
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
    const urlPause = startTrack?.audio && audio.current.paused
    // console.log(urlPause)
    const activeControl = urlPause ? false : true
    dispatch(activeSong(choiceActiveObj, activeControl))
    setControl(activeControl)
    urlPause ? audio.current.play() : audio.current.pause()
    audio.current.volume = 0.07
  }

  const countdown = () => {

    console.log(Math.ceil(seconds))
    //
  }


  const startTrack = (function () {
    const a = songsItems[0]
    if (Object.keys(choiceActiveObj).length) {
      return choiceActiveObj
    } else {
      return songsItems[0]
    }
  }());

  function throttle (callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
      if (!waiting) {                       // If we're not waiting
        callback.apply(this, arguments);  // Execute users function
        waiting = true;                   // Prevent future invocations
        setTimeout(function () {          // After a period of time
          waiting = false;              // And allow future invocations
        }, limit);
      }
    }
  }
  const delayedQuery = throttle(function (second) {
    console.log({ second: new Date(second.timeStamp) })
  }, 1000)
  useEffect(() => {
    handleControl()

  }, [choiceActiveObj.audio])

  const startTime = (time) => {
    // countdown()
    dispatch(activeTime(time))
  }

  const handleAddBurderToPlayerMain = (obj) => {
    choiceActiveObj.audio === obj.audio && handleControl()
    dispatch(activeSong(obj, false))
  }

  return (
    <div className="player">
      <div className="controls" onClick={delayedQuery}>
        <i onClick={handleControl}>
          {control ? <BtnPause/> : <BtnPlay/>}
        </i>
      </div>

      <div className="player__wrapper">
        <div className="player__main">
          <div className="player__item">
            <audio src={startTrack?.audio} ref={audio}
              // onTimeUpdate={evt => console.log(evt)}
                   onLoadedMetadata={e => startTime(e.target.duration)}/>
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
              <p className="player__time">{timeActiv}</p>
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

