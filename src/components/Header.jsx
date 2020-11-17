import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import {use100vh} from 'react-div-100vh'

import SocialLinks from "./SocialLinks";
import Player from "./Player/Player";
import ButtonStrim from './Buttons/ButtonStrim';

import logoPng from '../assets/img/header_logo.png';
import titleSvg from '../assets/img/header_title.svg';

import {fetchMusicLinks} from "../redux/actions/musicLinks";

const Header = () => {
  const [resizeSpoiler, setResizeSpoiler] = useState(true)
  const dispatch = useDispatch()
  const musicLisks = useSelector(({musicLinks}) => musicLinks.items)
  const blur = useSelector(({blur}) => blur.toggleBackground)
  const {visibleList} = useSelector(({active}) => active)

  useEffect(() => {
    dispatch(fetchMusicLinks())
  }, [dispatch])

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
    const halfHeight = height * 2 ? height : '100vh'
    return halfHeight
  }


  return (
    <header className='header'
            style={{
              height: MyHalfHeightExampleComponent(),
            }}
    >
      <Player/>
      <div className="header__wrapper"
           style={{
             filter: visibleList && blur && "blur(4px)",
           }}>
        <a href="https://marshakbooks.ru/">
          <img className='header__logo' src={logoPng} alt="Трубина" target="_blank"/>
        </a>
        <h1 className='header__title'>
          <img className='header__title-img' src={titleSvg} alt=""/>
        </h1>
        <div className='header__btn-container'>
          {/*<div className='header__btn-checker'>*/}
          {/*  <ButtonStrim*/}
          {/*    handleRealease={handleRealease}*/}
          {/*    text='Стриминги'*/}
          {/*    resizeSpoiler*/}
          {/*  />*/}

          {/*</div>*/}
          <ul className='header__btn-spoiler'>
            {
              musicLisks.length !== 0 && musicLisks.map((item, index) => (
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

    </header>
  )
}

export default Header