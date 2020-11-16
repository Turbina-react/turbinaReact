import {ADD_SONG_AUDIO, TRACK_TIME, VISIBLE_LIST, CONVERT_TIME} from "../constants";

export const activeSong = (songObj, getControl) => ({
  type: ADD_SONG_AUDIO,
  payload: {songObj, getControl}
})

export const activeTime = (duration, current, equalTime) => ({
  type: TRACK_TIME,
  payload: {duration, current, equalTime}
})

export const convertTime = (time) => ({
  type: CONVERT_TIME,
  payload: time
})

export const activeList = (visibleList) => ({
  type: VISIBLE_LIST,
  payload: visibleList
})
