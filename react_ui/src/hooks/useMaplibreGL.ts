import { Map, MapOptions } from "maplibre-gl";
import React from "react";

export type MapRef = React.RefObject<Map | null>;

interface MaplibreGLProps {
  mapRef: MapRef;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function useMaplibreGL(
  options: Partial<MapOptions>
): MaplibreGLProps {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<Map | null>(null);
  React.useEffect(() => {
    if (!containerRef.current) return;
    if (!mapRef.current) {
      mapRef.current = new Map({
        container: containerRef.current,
        style: "", // must be set in `options` but can't be undefined type-wise
        ...options,
      });
    }
  }, [options]);
  return { containerRef, mapRef };
}
