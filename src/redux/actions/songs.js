import dataList from '../../playList'
import {SET_SONGS, NEXT_TRACK} from '../constants'

export const fetchSongs = () => (dispatch) => {
    dispatch(setSongs(dataList.songList))
}

export const setSongs = (items) => ({
  type: SET_SONGS,
  payload: items,
})

export const indexNextTrack = (index) => ({
  type: NEXT_TRACK,
  payload: index
})
