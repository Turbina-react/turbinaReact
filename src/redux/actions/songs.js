import axios from "axios";


export const fetchBurgers = () => (dispatch) => {
  // dispatch(setLoaded(false))
  axios.get(`http://localhost:3001/songList`).then(({data}) => {
    dispatch(setSongs(data))
  })
}

export const setSongs = (items) => ({
  type: 'SET_SONGS',
  payload: items,
})