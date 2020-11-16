import {ADD_SONG_AUDIO, CONVERT_TIME, TRACK_TIME, VISIBLE_LIST} from "../constants";

const initialState = {
  choiceActiveSong: {},
  control: false,
  timeActive: 0,
  secondsDuration: null,
  currentTime: 0,
  equalTime: false,
  visibleList: false
}

const active = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_AUDIO: {
      return {
        ...state,
        choiceActiveSong: action.payload.songObj,
        control: action.payload.getControl,
      }
    }
    case TRACK_TIME : {

      return {
        ...state,
        secondsDuration: action.payload.duration,
        currentTime: action.payload.current,
        equalTime: action.payload.duration === action.payload.current
      }
    }
    case CONVERT_TIME : {
      console.log(action.payload)
      return {
        ...state,
        timeActive: action.payload
      }
    }
    case VISIBLE_LIST : {
      return {
        ...state,
        visibleList: action.payload
      }

    }
    default:
      return state
  }
}

export default active;