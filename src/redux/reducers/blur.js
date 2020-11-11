const initialState = {
  toggleBackground: false,
}

 const blur = (state = initialState, action) => {
  switch (action.type) {
    case 'BLUR': {
      console.log(action)
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