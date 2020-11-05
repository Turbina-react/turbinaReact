import React from 'react'
import classNames from 'classnames';

const AboutForm = () => {
  return (
    <form className="form" name="register" action="http://turbina.ru/post" method="POST">
      <h2 className="form__header">ФОРМА.</h2>
      <p className="form__text">Заполняя эту форму, вы становитесь частью проекта.</p>
      <fieldset className="form__fieldset">
        <div className="form__field">
          <input className="form__input" type="text" name="name" pattern="^[А-ЯA-Z][а-яa-z\-]{0,}\s[А-ЯA-Z][а-яa-z\-]{1,}?$" placeholder="Имя и фамилия автора" minlength="2" maxlength="40" required />
          <span className="form__error">Имя и фамилия автора в формате:</span>
        </div>
        <div className="form__field">
          <input className="form__input" type="tel" name="tel" placeholder="Телефон" 
              pattern="(\+7|8)\s?\(\d{3}\)\s?\d{3}-?\d{2}-?\d{2}|(\+7|8)\s?\d{3}(\s?|-?)\d{3}-?\d{2}-?\d{2}" minlength="11" maxlength="18"  required/>
          <span className="form__error">Телефон в формате: +7 (900) 000-00-00</span>
        </div>
        <div className="form__field">
          <input className="form__input" type="email" name="email" pattern="\w+[\.-]?\w+@\w+[\.-]?\w+\.[a-z]{2,5}" placeholder="Почта" minlength="2" maxlength="30" required />
          <span className="form__error">Почта в формате: students-yandex@yandex.ru</span>
        </div>
        <div className="form__field">
          <textarea className={classNames("form__input form__textarea")} type="text" name="comment" cols="40" rows="1" overflow="visible" pattern=""  placeholder="Стихи" minlength="2" required/>
          <span className="form__error">Ваши стихи</span>
        </div>
        <div className={classNames("form__field form__field_checkbox")}>
          <label className="form__label-checkbox">
            <input className={classNames("check__input form__checkbox")} type="checkbox" name="checkbox" required/>
            <span className="check__box"></span>
              Согласен с &#160;
            <a href="#" className="form__checkbox-link">офертой</a>
          </label>
          <span className="form__error">Необходимо согласиться</span>
        </div>  
        <input className="form__submit" type="submit" value="Отправить форму" name="submit" />
        <span className="form__error">Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!</span>
      </fieldset>
    </form>
  )
}

export default AboutForm