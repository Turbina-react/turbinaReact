import React from 'react'
import classNames from 'classnames';
import axios from 'axios';
import { useState } from 'react';

const AboutForm = () => {
  
  const [inputField , setInputField] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
    checkbox: '',
    id: '1',
  });
  const [textSubmit, settextSubmit] = useState('');

  const inputsHandler = e => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault()
    settextSubmit('Форма отправляеться ...')
    axios.post('http://localhost:3001/form', inputField)  
      .then(res => {
        console.log(res);
        settextSubmit('Форма успешно отправлена');
      })
      .catch(err => {
        console.log('err', err)
        settextSubmit('Что то пошло не так форма не отправилась Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!')
      })
  };
  return (
    <form className="form" name="register" onSubmit={handleSubmit}>
   
      <h2 className="form__header">ФОРМА.</h2>
      <p className="form__text">Заполняя эту форму, вы становитесь частью проекта.</p>
      <fieldset className="form__fieldset">
        <div className="form__field">
          <input className="form__input" type="text" name="name" pattern="^[А-ЯA-Z][а-яa-z\-]{0,}\s[А-ЯA-Z][а-яa-z\-]{1,}?$" placeholder="Имя и фамилия автора" minLength="2" maxLength="40" required onChange={inputsHandler} />
          <span className="form__error">Имя и фамилия автора в формате:</span>
        </div>
        <div className="form__field">
          <input className="form__input" type="phone" name="phone" placeholder="Телефон" 
              pattern="(\+7|8)\s?\(\d{3}\)\s?\d{3}-?\d{2}-?\d{2}|(\+7|8)\s?\d{3}(\s?|-?)\d{3}-?\d{2}-?\d{2}" minLength="11" maxLength="18"  required onChange={inputsHandler} />
          <span className="form__error">Телефон в формате: +7 (900) 000-00-00</span>
        </div>
        <div className="form__field">
          <input className="form__input" type="email" name="email" pattern="\w+[\.-]?\w+@\w+[\.-]?\w+\.[a-z]{2,5}" placeholder="Почта" minLength="2" maxLength="30" required onChange={inputsHandler} />
          <span className="form__error">Почта в формате: students-yandex@yandex.ru</span>
        </div>
        <div className="form__field">
          <textarea className={classNames("form__input", "form__textarea")} type="text" name="comment" cols="40" rows="1" overflow="visible" pattern=""  placeholder="Стихи" minLength="2" required onChange={inputsHandler} />
          <span className="form__error">Ваши стихи</span>
        </div>
        <div className={classNames("form__field", "form__field_checkbox")}>
          <label className="form__label-checkbox">
            <input className={classNames("check__input", "form__checkbox")} type="checkbox" name="checkbox" required onChange={inputsHandler} />
            <span className="check__box"></span>
              Согласен с &#160;
            <a href="#" target="_blank" className="form__checkbox-link">офертой</a>
          </label>
          <span className="form__error">Необходимо согласиться</span>
        </div>  
        <input className="form__submit" type="submit" value="Отправить форму" name="submit" />
        <span className="form__error1">{textSubmit}</span>
      </fieldset>
    </form>
  )
}

export default AboutForm