import dataList from "../../playList";

export const fetchMusicLinks = () => (dispatch) => {
  dispatch(setLinks(dataList.musicLinks))
}

export const setLinks = (items) => ({
  type: 'SET_MUSIC_LINKS',
  payload: items,
})

