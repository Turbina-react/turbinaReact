import dataList from "../../playList";
import {SET_MUSIC_LINKS} from "../constants";

export const fetchMusicLinks = () => (dispatch) => {
  dispatch(setLinks(dataList.musicLinks))
}

export const setLinks = (items) => ({
  type: SET_MUSIC_LINKS,
  payload: items,
})

