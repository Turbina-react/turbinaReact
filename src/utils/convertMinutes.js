export default (duration, current) => {
  const timeLeft = duration - current
  let s = timeLeft % 60;
  let m = Math.floor(timeLeft / 60) % 60;
  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  return `${m && Math.ceil(m)}.${s}`
}

