import classNames from "classnames";

const Details = ({startTrack, timeActive}) => {

  return (
    <div className="player__details">
      <div className="player__artist-block">
        <p className="player__text">{startTrack?.originalAuthor}</p>
        <p className="player__dash">feat</p>
        <p className="player__text">{startTrack?.artistname}</p>

        <p className="player__dash">&#8212;</p>
        <p className={classNames("player__text player__text_hide")}>{startTrack?.songname}</p>
      </div>
      <p className="player__time">{timeActive}</p>
    </div>
  )
}
export default Details