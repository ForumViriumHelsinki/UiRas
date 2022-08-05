export function formatTemperature(temp: number): string {
  return `${temp.toFixed(1).replace(".", ",")} °C`;
}

export function contractName(name: string) {
  // These are quite specific hacks for the current data set. :)
  name = name.replace(/(n\s)?(uimaranta|mattolaituri)$/, "$1").trim();
  name = name.replace(/lahden$/, "lahti");
  name = name.replace(/nan$/, "na");
  name = name.replace(/niemen$/, "niemi");
  name = name.replace(/nokan$/, "nokka");
  name = name.replace(/tilan$/, "tila");
  return name;
}
