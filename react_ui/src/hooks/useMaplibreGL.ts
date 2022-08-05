import { Map, MapMouseEvent, MapOptions, MapTouchEvent } from "maplibre-gl";
import React from "react";

export type MapRef = React.RefObject<Map | null>;

interface MaplibreGLProps {
  mapRef: MapRef;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function useMaplibreGL(
  options: Partial<MapOptions>,
  onZoomEnd?: (event: MapMouseEvent | MapTouchEvent) => void
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
      if (onZoomEnd) {
        // Note this is only configured once (which is not very Reacty)
        mapRef.current.on("zoomend", onZoomEnd);
      }
    }
  }, [options, onZoomEnd]);
  React.useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return { containerRef, mapRef };
}
