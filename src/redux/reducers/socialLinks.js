const initialState = {
  items: [],

}

const musicLinks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOCIAL_LINKS':
      return {
        ...state,
        items: action.payload,
      }

    default:
      return  state
  }
}

export default musicLinks;