import classNames from 'classnames';
import React from 'react'
import titlePng from '../assets/img/title.png';
import Pleer from "./Pleer/Pleer";




const Header = () => {

  return (
    <div className={classNames('header')}>
        {/*<img src={titlePng} alt=""/>*/}
        <div>лого</div>
      <img src={titlePng} alt=""/>
      <h1>Турбина</h1>
      <div>Плеер 2</div>
      <Pleer />
    </div>
  )
}

export default Header