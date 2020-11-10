import classNames from 'classnames';

const Realease = ({cover, artistname, songname, audio, text, onClickAddTrack, startTrack, visibleList}) => {

  const onnAddSong = () => {
    const obj = {
      audio,
      cover,
      songname,
      artistname,
      text
    }
    onClickAddTrack(obj)
  }

  return (
    <div>

      <div onClick={onnAddSong} className="player__list-item">
        <div className="player__details">
          <p className="player__text">{artistname}</p>
          <p className="player__dash">&#8212;</p>
          <p className={classNames("player__text player__text_hide")}>{songname}</p>
        </div>
      </div>
    </div>
  )
}

export default Realease;