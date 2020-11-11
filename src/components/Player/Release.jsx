import classNames from 'classnames';
const Realease = ({cover, audio, songname, originalAuthor, artistname, text, videoClip, onClickAddTrack}) => {
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
    onClickAddTrack(obj)
  }
  return (
    <>
      <div onClick={onnAddSong} className="player__details">
        <p onClick={onnAddSong} className="player__text">
          {`${originalAuthor}`}
          <span className="player__dash">feat</span>
          {artistname}
          <span className="player__dash">&#8212;</span>
          {songname}
        </p>
      </div>
    </>
  )
}
export default Realease;