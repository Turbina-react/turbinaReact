import classNames from 'classnames'
import {useDispatch} from "react-redux";
import {activeSong} from "../../redux/actions/active";
import {indexNextTrack} from "../../redux/actions/songs";

const Realease = ({song, startTrack, index}) => {
  const dispatch = useDispatch()

  const onnAddSong = () => {
    const obj = {
     ...song
    }
    dispatch(activeSong(obj, false))
    dispatch(indexNextTrack(index))
  }


  return (
    <>
      <div onClick={onnAddSong} className="player__details">
        <p className={classNames("player__text", "player__text_release")}
           style={{
             fontWeight: startTrack?.audio === song.audio && "500"
           }}
        >
          {`${song.originalAuthor}`}
          <span className={classNames("player__dash", "player__dash_release")}
                style={{
                  fontWeight: startTrack?.audio === song.audio && "500"
                }}
          >feat</span>
          {song.artistname}
          <span className={classNames("player__dash", "player__dash_release")}
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