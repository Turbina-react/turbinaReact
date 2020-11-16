import {BLUR} from "../constants";

const initialState = {
  toggleBackground: false,
}

 const blur = (state = initialState, action) => {
  switch (action.type) {
    case BLUR: {
      return {
        ...state,
        toggleBackground: action.payload
      }
    }
    default:
      return state
  }
}

export default blur;