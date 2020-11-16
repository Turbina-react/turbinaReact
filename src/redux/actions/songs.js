import dataList from '../../playList'

export const fetchSongs = () => (dispatch) => {
    dispatch(setSongs(dataList.songList))
}

export const setSongs = (items) => ({
  type: 'SET_SONGS',
  payload: items,
})

export const indexNextTrack = (index) => ({
  type: 'NEXT_TRACK',
  indexSong: index
})
