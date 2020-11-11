import classNames from "classnames";

const Details = ({startTrack, timeActive}) => {

  return (
    <div className="player__details">
      <div className="player__artist-block">
        <p className="player__text">
          {`${startTrack?.originalAuthor}`}
          <span className="player__dash">feat</span>
          {startTrack?.artistname}
          <span className="player__dash">&#8212;</span>
          {startTrack?.songname}
        </p>
      </div>
      <p className="player__time">{timeActive}</p>
    </div>
  )
}
export default Details