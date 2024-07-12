import useSwr, { SWRConfiguration } from "swr";
import { GetUirasResponse } from "../types/UiRaSGeoJSON";
import { UirasV2 } from "../types/UiRaSSingleV2";

async function get<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return (await response.json()) as Promise<T>;
}

export function useUirasV2GeoJSON(options?: SWRConfiguration) {
  return useSwr<GetUirasResponse>(
    "https://bri3.fvh.io/opendata/uiras/uiras_latest.geojson",
    get,
    options
  );
}

export function usePerDeviceData(deviceId: string, options?: SWRConfiguration) {
  return useSwr<UirasV2>(
    `https://bri3.fvh.io/opendata/uiras/${deviceId}.geojson`,
    get,
    options
  );
}
