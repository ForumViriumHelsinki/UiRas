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

export type Measurement = {
  time: string;
  temp_in: number;
  temp_water: number;
  batt: number;
};

export type FeatureProperties = {
  battery: number;
  name: string;
  location: string;
  district: string;
  info: string;
  links: FeatureLinks;
  measurement: Measurement;
};

export type GeometryCoordinates = [number, number];

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
