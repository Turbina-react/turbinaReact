import Fade from  'react-reveal/Fade';

const SocialLinks = ({title, link, resizeSpoiler}) => {
  return (
    <li>
      <Fade left collaps when={resizeSpoiler}>
        <a className="button" href={link} target="_blank">{title}</a>

      </Fade>
    </li>


  )
}

export default SocialLinks;