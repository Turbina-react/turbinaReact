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

  const [errCheck, seterrCheck] = useState('')

  const [textInf , setTextInf] = useState({
    submitBtn: 'Отправить форму',
    errorSubmit: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setTextInf({
      ...textInf,
      submitBtn: 'Форма отправляеться ...'});
    setTextInf({
            ...textInf,
            submitBtn: 'Ура, форма успешно отправлена!'});
    console.log(inputField)
    // axios.post('http://localhost:3001/form', inputField)
    //   .then(res => {
    //     setTextInf({
    //       ...textInf,
    //       submitBtn: 'Ура, форма успешно отправлена!'});
    //   })
    //   .catch(err => {
    //     setTextInf({
    //       ...textInf,
    //       submitBtn:'Форма не отправлена.',
    //       errorSubmit:'Упс, что-то пошло не так, попробуйте ещё раз!'});
    //   })
  };

  const inputsHandler = e => {
    e.target.name == 'checkbox' ?
    setInputField({
      ...inputField,
      [e.target.name]: e.target.checked
    }) : setInputField({
      ...inputField,
      [e.target.name]: e.target.value
    });
    e.target.name === 'checkbox' && e.target.checked === true ?
      seterrCheck('') : seterrCheck('Это поле обязательно');
    setTextInf({
      ...textInf,
      submitBtn:'Отправить форму',
      errorSubmit:''});
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__header">ФОРМА.</h2>
      <p className="form__text">Заполняя эту форму, вы становитесь частью проекта.</p>
      <fieldset className="form__fieldset">
        <div className="form__field">
          <input className="form__input" type="text" name="name" pattern="^[А-ЯA-Z][а-яa-z\-,ё]{0,}\s[А-ЯA-Z][а-яa-z\-,ё]{1,}?$" placeholder="Имя и фамилия автора" minLength="2" maxLength="40" required onChange={inputsHandler} />
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
            <span className="check__box" />
              Согласен с &#160;
            <a href="#" target="_blank" className="form__checkbox-link">офертой</a>
          </label>
          <span className="form__err">{errCheck}</span>
        </div>
        <div className="form__field">
          <button className="form__submit" type="submit" value={textInf.submitBtn} name="submit" >{textInf.submitBtn}</button>
          <span className="form__err">{textInf.errorSubmit}</span>
        </div>
      </fieldset>
    </form>
  )
}

export default AboutForm