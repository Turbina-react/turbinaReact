import classNames from 'classnames';
import React from 'react'

import Pleer from "./Pleer/Pleer";
import ButtonStrim from './Buttons/ButtonStrim';

import logoPng from '../assets/img/header_logo.png';
import titlePng from '../assets/img/header_title.svg';


const Header = () => {

  return (
    <div className={classNames('header')}>

        {/*<img src={titlePng} alt=""/>*/}

      <Pleer />

      <img className={classNames('header__logo')} src={logoPng} alt="Трубина"/>
      <h1 className={classNames('header__title')}>
        <img className={classNames('header__title-img')} src={titlePng} alt=""/>
      </h1>

      <div className={classNames('header__btn-container')}>
        <div className={classNames('header__btn-checker')}>
          <ButtonStrim
            text = 'Стриминги'
            outline
          />
        </div>
        <ul className={classNames('header__btn-spoiler')}>
          <a href="#" className="button">Яндекс.Музыка ↗</a>
          <a href="#" className="button">Apple Music ↗</a>
          <a href="#" className="button">VK Music ↗</a>
          <a href="#" className="button">Spotify ↗</a>
        </ul>
      </div>


    </div>
  )
}

export default Header