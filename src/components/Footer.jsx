import React, {useEffect} from 'react'
import {fetchSocialLinks} from "../redux/actions/socialLinks";
import {useDispatch, useSelector} from "react-redux";

const Footer = () => {
  const dispatch = useDispatch()
  const socialLinks = useSelector(({socialLinks}) => socialLinks.items)

  useEffect(() => {
    dispatch(fetchSocialLinks())
  }, [dispatch])
  return (
    <footer className="footer">
      <p className="footer__text"> &copy; Маршак, 2020.</p>
      <p className="footer__text">Сделано студентами {` `}
        <a className="footer__link" href={socialLinks.length !== 0 ? socialLinks[0].link : undefined} target="_blank">
          {socialLinks.length !== 0 && socialLinks[0].title}
        </a>
      </p>
    </footer>
  )
}

export default Footer