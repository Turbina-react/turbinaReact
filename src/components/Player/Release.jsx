import classNames from 'classnames';

const Realease = ({artistname, songname, audio, text, onClickAddBurger}) => {

  const onnAddSong = () => {
    const obj = {
      audio,
      songname,
      artistname,
      text
    }
    onClickAddBurger(obj)
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