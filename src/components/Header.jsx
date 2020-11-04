import classNames from 'classnames';
import React from 'react'

import Pleer from "./Pleer/Pleer";
import Button from '../components/Button';

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
          <Button
            text = 'Стриминги'
            outline
          />
        </div>
        <ul className={classNames('header__btn-spoiler')}>
          <Button
          text = 'Яндекс.Музыка ↗'
          />
          <Button
          text = 'Spotify ↗'
          />
          <Button
          text = 'Apple Music ↗'
          />
          <Button
          text = 'VK Music ↗'
          />
        </ul>
      </div>


    </div>
  )
}

export default Header