import { parseISO } from "date-fns";
import { UirasFeature } from "../types/UiRaSGeoJSON";

export function isValidFeature(feature: UirasFeature) {
  const { properties } = feature;
  const { temp_water: tempWater, time } = properties;
  if (tempWater < -1.0) return false;
  const seconds = (new Date().getTime() - parseISO(time).getTime()) / 1000;
  return seconds <= 60 * 60 * 3;
}
