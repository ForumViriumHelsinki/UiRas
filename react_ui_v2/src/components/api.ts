import axios from "axios";
import { useQuery } from "react-query";

import { Result, unwrapResult, withResult } from "../result";
import { GetUirasResponse, UirasV2 } from "./types";

/**
 * Get uiras2_v2.geojson
 */
export async function getUiras(): Promise<Result<GetUirasResponse>> {
  return withResult(async () => {
    const { data, status } = await axios.get<GetUirasResponse>(
      "https://iot.fvh.fi/opendata/uiras/uiras2_v2.geojson"
    );
    console.log(`getUiras() --> ${status}`);
    return data;
  });
}
/**
 * Wrap getUiras() in useQuery
 */
export function useQueryGetUiras() {
  return useQuery(["uiras"], async () => unwrapResult(await getUiras()));
}

/**
 * Get DEVID_v2.geojson
 */
export async function getUirasDataV2(id: string): Promise<Result<UirasV2>> {
  return withResult(async () => {
    const { data, status } = await axios.get<UirasV2>(
      `https://iot.fvh.fi/opendata/uiras/${id}_v2.geojson`
    );
    console.log(`getUirasDataV2(${id}) --> ${status}`);
    return data;
  });
}
/**
 * Wrap getUirasDataV1() in useQuery
 */
export function useQueryGetUirasDataV2(id: string) {
  return useQuery(["uirasdata" + id], async () =>
    unwrapResult(await getUirasDataV2(id))
  );
}
