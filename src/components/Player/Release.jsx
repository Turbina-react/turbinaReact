import {useDispatch} from "react-redux";
import {activeSong} from "../../redux/actions/active";
import {useEffect, useState} from "react";

const Realease = ({song, startTrack, index, currentTime, secondsDuration}) => {
  const dispatch = useDispatch()
  // const [comparison, setComparison] = useState(null)
  // const [activeIndex, setActiveIndex] = useState(0)

  // useEffect(() => {
  //
  //   console.log(activeIndex)
  // }, [currentTime === secondsDuration])

  const onnAddSong = () => {
    // setActiveIndex(index)
    const obj = {
     ...song
    }
    dispatch(activeSong(obj, false))
  }


  return (
    <>
      <div onClick={onnAddSong} className="player__details">
        <p className="player__text player__text_release"
           style={{
             fontWeight: startTrack?.audio === song.audio && "500"
           }}
        >
          {`${song.originalAuthor}`}
          <span className="player__dash player__text_release"
                style={{
                  fontWeight: startTrack?.audio === song.audio && "500"
                }}
          >feat</span>
          {song.artistname}
          <span className="player__dash player__text_release"
                style={{
                  fontWeight: startTrack?.audio === song.audio && "500"
                }}
          >&#8212;</span>
          {song.songname}
        </p>
      </div>
    </>
  )
}

export default Realease;