import {SET_SONGS, NEXT_TRACK} from "../constants";

const initialState = {
  items: [],
  isLoaded: false,
  indexSong: 0
}

const songs = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case NEXT_TRACK:
      return {
        ...state,
        indexSong: action.payload
      }
    default:
      return  state
  }
}

export default songs;