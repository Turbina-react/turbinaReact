const initialState = {
  choiceActiveSong: {},
  control: false,
  timeActive: 0,
  secondsDuration: null,
  currentTime: 0,
  equalTime: false
}
const active = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG_AUDIO': {

      return {
        ...state,
        choiceActiveSong: action.payload,
        control: action.control,
      }
    }
    case 'TRACK_TIME' : {

      const timeLeft = action.duration - action.current
      let s = timeLeft % 60;
      let m = Math.floor(timeLeft / 60) % 60;
      s = s < 10 ? "0" + s : s;
      m = m < 10 ? "0" + m : m;
      let timeMinSec = `${m && Math.ceil(m)}.${s && s}`
      return {
        ...state,
        timeActive: timeMinSec,
        secondsDuration: action.duration,
        currentTime: action.current,
        equalTime: action.duration === action.current
      }

    }
    default:
      return state
  }
}

export default active;