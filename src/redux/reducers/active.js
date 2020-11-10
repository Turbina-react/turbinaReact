const initialState = {
  choiceActiveObj: {},
  control: false,
  timeActive: null,
  secondsDuration: null
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
        const seconds = action.payload %60
        const minutes = Math.floor(action.payload / 60)
        // console.log(`${minutes}.${Math.ceil(seconds)}`)
        const timeMinSec = `${minutes}.${Math.ceil(seconds)}`
        console.log(action)
        return {
          ...state,
          timeActive: timeMinSec,
          secondsDuration: action.payload
        }

      }
    default:
      return state
  }
}

export default active;