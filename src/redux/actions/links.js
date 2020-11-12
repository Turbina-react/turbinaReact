import axios from "axios";


export const fetchLinks = () => (dispatch) => {
  // dispatch(setLoaded(false))
  axios.get(`http://localhost:3001/socialLisks`).then(({data}) => {
    dispatch(setLinks(data))
  })
}

export const setLinks = (items) => ({
  type: 'SET_LINKS',
  payload: items,
})

