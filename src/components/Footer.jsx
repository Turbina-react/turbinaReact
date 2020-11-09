import classNames from 'classnames';
import React from 'react'


const Footer = () => {

  return(
    <div className={classNames('footer')}>
      <p className={classNames('footer__text')}> &copy; Маршак, 2020.</p>
      <p className={classNames('footer__text')}>Сделано студентами <a className={classNames('footer__link')} href='https://praktikum.yandex.ru/' >Яндекс.Практикум</a></p>
    </div>
  )
}

export default Footer