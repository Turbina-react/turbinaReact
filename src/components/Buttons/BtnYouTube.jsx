import iconYouTubePng from "../../assets/img/iconYoutube.png";

const BtnYouTube = () => {

  return (
    <a className="btnYouTube" href="#" target="_blank">
      <img src={iconYouTubePng} alt="YouTube"/>
      <p className="btnYouTube__text">Клип</p>
    </a>

  )
}

export default BtnYouTube;