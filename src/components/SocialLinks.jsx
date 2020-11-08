const SocialLinks = ({title, link}) => {
  return (
    <a className="button" href={link} target="_blank">{title}</a>
  )
}

export default SocialLinks;