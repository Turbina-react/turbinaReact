import classNames from 'classnames';

const TextSong = () => {

  return (
    <div className="player__text-song">

      <p className={classNames("player__text player__text_song")}>
        Разрывает и бомбит, и терзают сомнения <br/>
        У кого о чем болит на online обучении<br/>
        Все забрали зеркала, отключили питание<br/>
        Мама точно не права cо своим воспитанием<br/>
      </p>
      <p className={classNames("player__text player__text_song")}>
        Что же ты девочка, как же ты<br/>
        Всю ночь сидела в гаджетах<br/>
        Тупо смотрела мемчики<br/>
        Мальчиков в доме девочек<br/>
      </p>
      <p className={classNames("player__text player__text_song")}>
        Что же ты девочка, как же ты<br/>
        Всю ночь сидела в гаджетах<br/>
        Тупо смотрела мемчики<br/>
        Мальчиков в доме девочек<br/>
      </p>

    </div>
  )
}

export default TextSong;