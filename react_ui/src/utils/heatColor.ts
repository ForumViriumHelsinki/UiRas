// https://akx.github.io/gradient/?s=AQAA8-r-f1X49BvUqve7Xf--8hgy
function getColor(position: number) {
  if (position < 0.3) {
    const a = 3.3 * position,
      b = 1 - a;
    return [b + a, b + a, b + 0.1 * a];
  }
  if (position < 0.7) {
    const a = 2.5 * (position - 0.3),
      b = 1 - a;
    return [b + a, b + 0.7 * a, 0.1 * b + 0.4 * a];
  }
  const a = 3.3 * (position - 0.7),
    b = 1 - a;
  return [b + a, 0.7 * b + 0.1 * a, 0.4 * b + 0.2 * a];
}

export default function deriveHeatColor(
  temp: number,
  minTemp: number,
  maxTemp: number
) {
  const tempQ = (temp - minTemp) / (maxTemp - minTemp); // 0..1
  const [r, g, b] = getColor(tempQ);
  return `rgb(${r * 255},${g * 255},${b * 255})`;
}
