import React from 'react'

const Footer = () => {

  return (
    <div className="footer">
      <p className="footer__text"> &copy; Маршак, 2020.</p>
      <p className="footer__text">Сделано студентами
        <a className="footer__link" href='https://praktikum.yandex.ru/' target="_blank">Яндекс.Практикум</a>
      </p>
    </div>
  )
}

export default Footer