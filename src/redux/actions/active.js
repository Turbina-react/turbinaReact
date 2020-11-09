export const activeSong = (songObj, getControl) => ({
  type: 'ADD_SONG_AUDIO',
  payload: songObj,
  control: getControl,
})

export const activeTime = (time) => ({
  type: 'TRACK_TIME',
  payload: time
})