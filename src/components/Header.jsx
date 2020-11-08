import classNames from 'classnames';
import React, {useEffect, useRef, useState} from 'react'
import {use100vh} from 'react-div-100vh'


import Pleer from "./Pleer/Pleer";
import ButtonStrim from './Buttons/ButtonStrim';
import logoPng from '../assets/img/header_logo.png';
import titlePng from '../assets/img/header_title.svg';

const Header = () => {
  const [resizeSpoiler, setResizeSpoiler] = useState(true)

  const handleRealease = (setvisible) => {
    setResizeSpoiler(resizeSpoiler => !resizeSpoiler)
  }
// console.log(use100vh())
  useEffect(() => {
    const updateView = () => {
      setResizeSpoiler(window.matchMedia("(min-width: 520px)").matches);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const MyHalfHeightExampleComponent = () => {
    const height = use100vh()
    const halfHeight = height ? height / 1 : '100vh'
    return halfHeight
  }

  return (
    <div className={classNames('header')}
         style={
           {height: MyHalfHeightExampleComponent()} // height screen
         }
    >

      <Pleer/>
      <img className={classNames('header__logo')} src={logoPng} alt="Трубина"/>
      <h1 className={classNames('header__title')}>
        <img className={classNames('header__title-img')} src={titlePng} alt=""/>
      </h1>

      <div className={classNames('header__btn-container')}>
        <div className={classNames('header__btn-checker')}>
          <ButtonStrim
            handleRealease={handleRealease}
            text='Стриминги'
            resizeSpoiler
          />
        </div>

        <ul className={classNames('header__btn-spoiler')}
            style={{display: resizeSpoiler ? "flex" : 'none'}}
        >
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