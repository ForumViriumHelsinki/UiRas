export function formatTemperature(temp: number): string {
  return `${temp.toFixed(1).replace(".", ",")} °C`;
}
