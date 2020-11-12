export const activeSong = (songObj, getControl, index) => ({
  type: 'ADD_SONG_AUDIO',
  payload: songObj,
  control: getControl,

})

export const activeTime = (duration, current, equalTime) => ({
  type: 'TRACK_TIME',
  duration: duration,
  current: current,
  equalTime: equalTime
})

