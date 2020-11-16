export const activeSong = (songObj, getControl) => ({
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

export const activeList = (visible) => ({
  type: 'VISIBLE_LIST',
  visibleList: visible
})
