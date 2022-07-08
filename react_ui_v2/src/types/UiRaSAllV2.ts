/**
 * UiRaS all GeoJSON v2
 * Generated using https://transform.tools/json-to-typescript
 */

export interface UirasAllV2 {
  type: string;
  meta: Meta;
  features: Feature[];
}

export interface Meta {
  created_at: string;
  comment: string;
  contact: string;
}

export interface Feature {
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
  temp_water: number;
  temp_in: number;
  battery: number;
  time: string;
  links: Links;
}

export interface Links {
  json: Json;
  geojson: Geojson;
  servicemap?: Servicemap;
  site?: Site;
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

export interface Servicemap {
  type: string;
  rel: string;
  title: string;
  href: string;
}

export interface Site {
  type: string;
  rel: string;
  title: string;
  href: string;
}
