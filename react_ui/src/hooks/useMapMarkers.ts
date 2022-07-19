import { Map, Marker } from "maplibre-gl";
import React from "react";

export default function useMapMarkers<T>(
  mapRef: React.RefObject<Map | null>,
  features: readonly T[] | undefined,
  getMarkerId: (feature: T) => string | null,
  getMarkerCoordinates: (feature: T) => [number, number] | null,
  getMarkerDOMElement: (feature: T) => HTMLElement | null
) {
  const currentMarkersRef = React.useRef<{ [id: string]: Marker }>({});

  React.useEffect(() => {
    const map = mapRef.current;
    // TODO: might be nicer to reuse the markers with the same ID
    Object.values(currentMarkersRef.current).forEach((marker) =>
      marker.remove()
    );
    if (!map) return;
    if (!features) return;
    const markerMap: { [id: string]: Marker } = {};
    for (const feature of features) {
      const coords = getMarkerCoordinates(feature);
      if (!coords) continue;
      const id = getMarkerId(feature);
      if (!id) continue;
      const el = getMarkerDOMElement(feature);
      if (!el) continue;
      const marker = new Marker(el).setLngLat(coords);
      markerMap[id] = marker;
      marker.addTo(map);
    }
    currentMarkersRef.current = markerMap;
  }, [
    features,
    getMarkerCoordinates,
    getMarkerDOMElement,
    getMarkerId,
    mapRef,
  ]);
}
