export const activeSong = (songObj, getControl) => ({
  type: 'ADD_SONG_AUDIO',
  payload: songObj,
  control: getControl,
})

export const activeTime = (duration, current) => ({
  type: 'TRACK_TIME',
  duration: duration,
  current: current
})

export const nextTrack = () => ({
  type: 'NEXT_TRACK'
})