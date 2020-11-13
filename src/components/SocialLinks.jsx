import Fade from  'react-reveal/Fade';

const SocialLinks = ({title, link, resizeSpoiler}) => {
  return (
    <Fade left collaps when={resizeSpoiler}>
      <a className="button" href={link} target="_blank">{title}</a>

    </Fade>
    
  )
}

export default SocialLinks;