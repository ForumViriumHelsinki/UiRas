/**
 * Types for UiRaS GeoJSON features
 */

export type FeatureLink = {
  type: string;
  rel: string;
  title: string;
  href: string;
};

type FeatureLinks = Record<string, FeatureLink>;

export type FeatureProperties = {
  battery: number;
  name: string;
  location: string;
  district: string;
  temp_internal: number;
  temp_water: number;
  time: string;
  links: FeatureLinks;
};

export type GeometryCoordinates = {
  coordinates: [number, number];
};

export type FeatureGeometry = {
  type: "Point";
  coordinates: GeometryCoordinates;
};

export type UirasFeature = {
  id: string;
  geometry: FeatureGeometry;
  properties: FeatureProperties;
};

export type GetUirasResponse = {
  features: UirasFeature[];
};

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

/**
 * Types for UiRaS measurement data V2
 */

export type SensorDataProps = {
  properties: {
    name: string;
    data: {
      d1: [
        {
          time: string;
          batt: number;
          temp_in: number;
          temp_water: number;
          temp_water_min: number;
          temp_water_max: number;
        }
      ];
      h3: [
        {
          time: string;
          batt: number;
          temp_in: number;
          temp_water: number;
        }
      ];
      raw: [
        {
          time: string;
          batt: number;
          temp_in: number;
          temp_water: number;
        }
      ];
    };
  };
};

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
