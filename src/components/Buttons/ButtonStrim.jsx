import classNames from 'classnames';
import {useEffect, useState} from "react";
import closeStrimSvg from '../../assets/img/closeSt.svg';

const ButtonStrim = ({text, handleRealease}) => {
  const [visiblePopup, setVisiblePopup] = useState(true);

  useEffect(() => {
    handleRealease(visiblePopup)
  }, [visiblePopup])

  const onTogglePopup = () => {
    setVisiblePopup(visiblePopup => !visiblePopup)
  }

  return (
    <div onClick={onTogglePopup} className="buttonWrapper">
      <button
        className="button"
      >
        {visiblePopup ? text
          : (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.9034" y1="4.90373" x2="14.0958" y2="14.0961" stroke="white" strokeWidth="2"/>
              <line x1="4.90422" y1="14.0961" x2="14.0966" y2="4.90373" stroke="white" strokeWidth="2"/>
            </svg>
          )
        }
      </button>
    </div>
  )
}

export default ButtonStrim