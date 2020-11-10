import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";

import {BtnPause, BtnPlay, BtnArrow, BtnClose, BtnYouTube, Details, Seekbar} from './index'
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
  const [coverPlace780, setCoverPlace780] = useState(true)
  const [coverPlace380, setCoverPlace380] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const MyAudio = useRef()
  const dispatch = useDispatch()
  const songsItems = useSelector(({songs}) => songs.items)
  const {choiceActiveObj, timeActive, secondsDuration} = useSelector(({active}) => active)


  useEffect(() => {
    dispatch(fetchBurgers())
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
      setCoverPlace780(window.matchMedia("(min-width: 780px)").matches);
      setCoverPlace380(window.matchMedia("(min-width: 380px)").matches);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const startTime = (e) => {
    // countdown()
    dispatch(activeTime(Math.round(e), null))
  }

  const handleAddTrackToPlayerMain = (obj) => {
    choiceActiveObj.audio === obj.audio && handleControl()
    dispatch(activeSong(obj, false))
  }

  return (
    <div className="player">
      {
        coverPlace780 && visibleList && <img className="player__cover" src={startTrack?.cover}/>
      }
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
          <div className="player__button-wrapper">
            {
              visibleList && startTrack?.videoClip !== "" && <BtnYouTube/>
            }
            {
              visibleList &&
              <ButtonRealease handleRealease={handleRealease} text={!visibleRealease ? "Текст песни" : "Релизы"}/>
            }
          </div>
        </div>
        {
          visibleList &&
          <div className="player__list">
            {
              !coverPlace780 && visibleList && coverPlace380 && <img className="player__cover" src={startTrack?.cover}/>
            }
            <div className="player__list-items">
              <h3 className="player__typeContent">{!visibleRealease ? "Релизы: " : "Текст песни: "} </h3>
              <div className="list"
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
        {

        }
      </div>

      <i className="open-popup" onClick={openPlayerList}>
        {!visibleList ? <BtnArrow/> : <BtnClose/>}
      </i>
    </div>
  )
}

export default Player

