import classNames from 'classnames';

const TextSong = ({choiceActiveText}) => {

  return (
    <div className="player__text-song">
      <p className={classNames("player__text", "player__text_song")}>
        {choiceActiveText}
      </p>
    </div>
  )
}

export default TextSong;