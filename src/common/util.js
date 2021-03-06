export default function clamp(x, fromX, toX) {
  if (x < fromX) return fromX;
  if (x > toX) return toX;

  return x;
}

export function animationEx(dx, startTime, currentTime, speed, looper = false) {
  const diff = currentTime - startTime;
  let time = (speed && diff / speed) || 0;

  if (looper) {
    time %= 1;
  } else if (time > 1) {
    time = 1;
  }

  return { offset: dx * time, progress: time };
}

const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);

export function getTime(date) {
  const convertDate = new Date(date);
  return `${normalize(convertDate.getHours())}:${normalize(convertDate.getMinutes())}:${normalize(
    convertDate.getSeconds(),
  )}`;
}
