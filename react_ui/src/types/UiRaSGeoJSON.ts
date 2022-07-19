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
