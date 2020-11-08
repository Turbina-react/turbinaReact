const initialState = {
  items: [],
  isLoaded: false
}

const songs = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }

    default:
      return  state
  }
}

export default songs;