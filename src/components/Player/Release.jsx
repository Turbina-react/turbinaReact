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
    <div>

      <div onClick={onnAddSong} className="player__list-item">
        <div className="player__details">
          <p className="player__text">{originalAuthor}</p>
          <p className="player__dash">feat</p>
          <p className="player__text">{artistname}</p>
          <p className="player__dash">&#8212;</p>
          <p className={classNames("player__text player__text_hide")}>{songname}</p>
        </div>
      </div>
    </div>
  )
}

export default Realease;