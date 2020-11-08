import classNames from 'classnames';

const Realease = ({artistname, songname, audio, onClickAddBurger}) => {

  const onnAddSong = () => {
    const obj = {
      audio,
      songname,
      artistname
    }
    onClickAddBurger(obj)
  }

  return (
    <div>
      <div onClick={onnAddSong} className="player__listItem">
        <div className="player__details">
          <h2>{artistname}</h2>
          <p className="dash">&#8212;</p>
          <p className="player__artistName">{songname}</p>
        </div>
      </div>
    </div>
  )
}

export default Realease;