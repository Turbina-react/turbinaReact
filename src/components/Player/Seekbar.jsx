const Seekbar = ({clickHandler, currentTime, secondsDuration}) => {

  return (
    <div className="player__seekbar" onClick={clickHandler}>
      <div className="player__timeline"

      >
        <div className="player__timeline-bar"
             style={{
               width: `${currentTime / secondsDuration * 100}%`
             }}
        />
      </div>


      {/*<input type="range"/>*/}
    </div>
  )
}

export default Seekbar;