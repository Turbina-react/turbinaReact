import {useDispatch} from "react-redux";
import {activeSong} from "../../redux/actions/active";

const Realease = ({cover, audio, songname, originalAuthor, artistname, text, videoClip, selectedSong, startTrack}) => {
  const dispatch = useDispatch()
  const onnAddSong = () => {
    const obj = {
      cover,
      audio,
      songname,
      originalAuthor,
      artistname,
      text,
      videoClip
    }
    console.log(obj)
    dispatch(activeSong(obj, false))
  }
  // console.log(selectedSong)
  return (
    <>
      <div onClick={onnAddSong} className="player__details">
        <p className="player__text player__text_release"
           style={{
             fontWeight: startTrack?.audio === audio && "500"
           }}
        >
          {`${originalAuthor}`}
          <span className="player__dash player__text_release"
                style={{
                  fontWeight: startTrack?.audio === audio && "500"
                }}
          >feat</span>
          {artistname}
          <span className="player__dash player__text_release"
                style={{
                  fontWeight: startTrack?.audio === audio && "500"
                }}
          >&#8212;</span>
          {songname}
        </p>
      </div>
    </>
  )
}
export default Realease;