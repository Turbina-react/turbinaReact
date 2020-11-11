import classNames from 'classnames';
import React, {useEffect, useRef, useState} from 'react'
import {use100vh} from 'react-div-100vh'

import SocialLinks from "./SocialLinks";
import Player from "./Player/Player";
import ButtonStrim from './Buttons/ButtonStrim';

import logoPng from '../assets/img/header_logo.png';
import titleSvg from '../assets/img/header_title.svg';

const socialLisks = [
  {
    title: 'Яндекс.Музыка ↗',
    link: 'https://music.yandex.ru/home',
  },
  {
    title: 'Apple Music ↗',
    link: 'https://www.apple.com/ru/apple-music/',
  },
  {
    title: 'VK Music ↗',
    link: 'https://vk.com/vkmusic',
  },
  {
    title: 'Spotify ↗',
    link: 'https://www.spotify.com/by-ru/',
  },

]

const Header = () => {
  const [resizeSpoiler, setResizeSpoiler] = useState(true)

  const handleRealease = (setvisible) => {
    setResizeSpoiler(resizeSpoiler => !resizeSpoiler)
  }

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

      <img className={classNames('header__logo')} src={logoPng} alt="Трубина"/>
      <h1 className={classNames('header__title')}>
        <img className={classNames('header__title-img')} src={titleSvg} alt=""/>
      </h1>
      <Player/>

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
          {
            socialLisks.map((item, index) => (
              <SocialLinks
                key={`${item.title}_${index}`}
                {...item}
              />
            ))
          }
        </ul>

      </div>

    </div>
  )
}

export default Header