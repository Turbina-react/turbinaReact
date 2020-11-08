import {useState} from "react";

const ButtonRealease = ({text, handleRealease}) => {
  const [visibleRealease, setVisibleRealease] = useState(true)

  const onStateChanges = () => {
    setVisibleRealease(visibleRealease => !visibleRealease)
    handleRealease(visibleRealease)
  }

  return (
    <button
      onClick={onStateChanges}
      className="button">
      {text}
    </button>
  )
}

export default ButtonRealease;