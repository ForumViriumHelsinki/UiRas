import React from "react";
import { UirasFeature } from "../types/UiRaSGeoJSON";
import { isValidFeature } from "../utils/validation";

export default function useMinMaxTemp(
  features: readonly UirasFeature[] | undefined
): [number, number] {
  return React.useMemo(() => {
    if (!features) return [0, 0];
    const temps = features
      .filter(isValidFeature)
      .map((feature) => feature.properties.measurement.temp_water);
    return [Math.min(...temps), Math.max(...temps)];
  }, [features]);
}
