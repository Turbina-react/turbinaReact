import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from 'react'
import {use100vh} from 'react-div-100vh'

import SocialLinks from "./SocialLinks";
import Player from "./Player/Player";
import ButtonStrim from './Buttons/ButtonStrim';

import logoPng from '../assets/img/header_logo.png';
import titleSvg from '../assets/img/header_title.svg';

import {fetchLinks} from "../redux/actions/links";

const Header = () => {
  const [resizeSpoiler, setResizeSpoiler] = useState(true)
  const dispatch = useDispatch()
  const socialLisks = useSelector(({links}) => links.items)
  const blur = useSelector(({blur}) => blur.toggleBackground)
  const {visibleList} = useSelector(({active}) => active)

  useEffect(() => {
    dispatch(fetchLinks())
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
    const halfHeight = height*2 ? height / 1 : '100vh'
    return halfHeight
  }


  return (
    <div className={classNames('header')}
    style={{
      height: MyHalfHeightExampleComponent(),
    }}
    >
      <Player/>
      <div className="header__wrapper"
           style={{
             filter: visibleList && blur && "blur(4px)",
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
          <ul className={classNames('header__btn-spoiler')}>
            {
              socialLisks.length !== 0 && socialLisks.map((item, index) => (
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