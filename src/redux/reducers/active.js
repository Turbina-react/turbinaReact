const initialState = {
  choiceActiveObj: {},
  control: false
}
const active = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_SONG_AUDIO': {
      return {
        ...state,
        choiceActiveObj: action.payload,
        control: action.control
      }
    }

    default:
      return state
  }
}

export default active;