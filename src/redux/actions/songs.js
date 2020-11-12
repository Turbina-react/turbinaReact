import axios from "axios";


export const fetchSongs = () => (dispatch) => {
  // dispatch(setLoaded(false))
  axios.get(`http://localhost:3001/songList`).then(({data}) => {
    dispatch(setSongs(data))
  })
}

export const setSongs = (items) => ({
  type: 'SET_SONGS',
  payload: items,
})

export const indexNextTrack = (index) => ({
  type: 'NEXT_TRACK',
  indexSong: index
})
