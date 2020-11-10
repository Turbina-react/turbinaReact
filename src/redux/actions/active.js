export const activeSong = (songObj, getControl) => ({
  type: 'ADD_SONG_AUDIO',
  payload: songObj,
  control: getControl,
})

export const activeTime = (duration) => ({
  type: 'TRACK_TIME',
  payload: duration
})