export const activeSong = (songObj, getControl) => ({
  type: 'ADD_SONG_AUDIO',
  payload: songObj,
  control: getControl,
})
