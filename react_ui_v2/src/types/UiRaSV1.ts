/**
 * Types for UiRaS measurement data V1
 */

export type UirasMetaV1 = {
  name: string;
  location: string;
  district: string;
  lat: number;
  lon: number;
  servicemap_url: string;
  site_url: string;
  site_title: string;
  valid_from: string;
  file_created: string;
};

export type UiRasDataItemV1 = {
  time: string;
  temp_air: number;
  temp_water: number;
};

export type UiRasDataResponseV1 = {
  meta: UirasMetaV1;
  data: UiRasDataItemV1[];
};
