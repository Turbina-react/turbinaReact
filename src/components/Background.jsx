import backgroungPng from '../assets/img/header_background.png';
import {useSelector} from "react-redux";

const Background = () => {

  const blur = useSelector(({blur}) => blur.toggleBackground)

  return <img className="background" src={backgroungPng} alt="Фон-эквалайзер"/>

}

export default Background;