import {SET_MUSIC_LINKS} from "../constants";

const initialState = {
  items: [],
}

const musicLinks = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_LINKS:
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state
  }
}

export default musicLinks;