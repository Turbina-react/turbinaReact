const initialState = {
  items: [],

}

const links = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LINKS':
      return {
        ...state,
        items: action.payload,

      }

    default:
      return  state
  }
}

export default links;