const initialState = {
  choiceActiveObj: {},
  control: false,
  timeActive: null,
  currentTime: null,
  secondsDuration: null,
}
const active = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_SONG_AUDIO': {
      return {
        ...state,
        choiceActiveObj: action.payload,
        control: action.control,
      }
    }
      case 'TRACK_TIME' : {
        const timeLeft = action.duration - action.current
        let s = timeLeft % 60;
        let m = Math.floor( timeLeft / 60 ) % 60;
        s = s < 10 ? "0"+s : s;
        m = m < 10 ? "0"+m : m;
        const timeMinSec = `${Math.ceil(m)}.${s}`
        return {
          ...state,
          timeActive: timeMinSec,
          secondsDuration: action.duration,
          currentTime : action.current
        }

      }
    default:
      return state
  }
}

export default active;