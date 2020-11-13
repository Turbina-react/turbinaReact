import classNames from 'classnames';
import React, {useEffect, useRef, useState} from 'react'
import {use100vh} from 'react-div-100vh'

import SocialLinks from "./SocialLinks";
import Player from "./Player/Player";
import ButtonStrim from './Buttons/ButtonStrim';

import logoPng from '../assets/img/header_logo.png';
import titleSvg from '../assets/img/header_title.svg';
import {useSelector} from "react-redux";
import Fade from 'react-reveal/Fade';
import { SwitchTransition, CSSTransition, TransitionGroup} from 'react-transition-group';

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
    const updateView = () => setResizeSpoiler(window.matchMedia("(min-width: 520px)").matches);
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const MyHalfHeightExampleComponent = () => {
    const height = use100vh()
    const halfHeight = height ? height / 1 : '100vh'
    return halfHeight
  }
  const blur = useSelector(({blur}) => blur.toggleBackground)

  return (
    <div className={classNames('header')}>

      <Player/>
      <div className="header__wrapper"
      style={{
        height: MyHalfHeightExampleComponent(),
        filter: blur && "blur(4px)",
      }}>
        <img className={classNames('header__logo')} src={logoPng} alt="Трубина"/>
        <h1 className={classNames('header__title')}>
          <img className={classNames('header__title-img')} src={titleSvg} alt=""/>
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
              //style={{display: resizeSpoiler ? "flex" : 'none'}}
          >
          
            
              
            {
              socialLisks.map((item, index) => (
                <SocialLinks
                  resizeSpoiler={resizeSpoiler}
                  key={`${item.title}_${index}`}
                  {...item}
                />
              ))
            }
            
            
          </ul>
        </div>


      </div>

    </div>
  )
}

export default Header