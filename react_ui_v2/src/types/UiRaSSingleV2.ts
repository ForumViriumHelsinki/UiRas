/**
 * UiRaS single GeoJSON v2
 * Generated using https://transform.tools/json-to-typescript
 */

export interface UirasV2 {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  name: string;
  location: string;
  district: string;
  created_at: string;
  links: Links;
  data: Data;
}

export interface Links {
  json: Json;
  geojson: Geojson;
}

export interface Json {
  type: string;
  rel: string;
  title: string;
  href: string;
}

export interface Geojson {
  type: string;
  rel: string;
  title: string;
  href: string;
}

export interface Data {
  raw: Raw[];
  h3: H3[];
  d1: D1[];
}

export interface Raw {
  time: string;
  temp_water: number;
  temp_in: number;
  rssi: number;
  batt: number;
}

export interface H3 {
  time: string;
  temp_water: number;
  temp_in: number;
  rssi: number;
  batt: number;
}

export interface D1 {
  time: string;
  temp_water_min: number;
  temp_water_max: number;
  temp_water: number;
  temp_in: number;
  rssi: number;
  batt: number;
}
