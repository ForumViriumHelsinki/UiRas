import type { MapOptions } from "maplibre-gl";
import React from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import "./uiras-map.css";
import { dataRefreshInterval } from "../../consts";
import useMapMarkers from "../../hooks/useMapMarkers";
import useMaplibreGL, { MapRef } from "../../hooks/useMaplibreGL";
import useMinMaxTemp from "../../hooks/useMinMaxTemp";
import useWindowSize from "../../hooks/useWindowSize";
import { UirasFeature } from "../../types/UiRaSGeoJSON";
import { contractName, formatTemperature } from "../../utils/formatting";
import deriveHeatColor from "../../utils/heatColor";
import { isValidFeature } from "../../utils/validation";
import { useUirasV2GeoJSON } from "../api";
// eslint-disable-next-line import/no-unresolved
import mapStyle from "./style.json?url";

const mapOptions: Partial<MapOptions> = {
  style: mapStyle,
  center: [24.9537, 60.1677],
  zoom: 10,
  minZoom: 10,
};

function getMarkerCoordinates(feature: UirasFeature) {
  return feature.geometry.coordinates;
}

function getMarkerId(feature: UirasFeature) {
  return feature.id;
}

function useUirasMapMarkers(mapRef: MapRef) {
  const uirasQuery = useUirasV2GeoJSON({
    refreshInterval: dataRefreshInterval,
  });
  const features = uirasQuery.data?.features;

  const [minTemp, maxTemp] = useMinMaxTemp(features);

  const getMarkerDOMElement = React.useCallback(
    (feature: UirasFeature) => {
      if (!isValidFeature(feature)) return null;
      const el = document.createElement("div");
      const { temp_water: temp } = feature.properties.measurement;
      const { name } = feature.properties;
      if (temp === null) {
        return null;
      }
      el.title = `${name} (${formatTemperature(temp)})`;
      el.style.backgroundColor = deriveHeatColor(temp, minTemp, maxTemp);
      el.className = "uiras-map-marker";
      const nameEl = document.createElement("div");
      nameEl.className = "uiras-map-marker-name";
      nameEl.innerText = contractName(name);
      const tempEl = document.createElement("div");
      tempEl.className = "uiras-map-marker-temp";
      tempEl.innerText = formatTemperature(temp);
      el.appendChild(nameEl);
      el.appendChild(tempEl);
      return el;
    },
    [maxTemp, minTemp]
  );
  useMapMarkers(
    mapRef,
    features,
    getMarkerId,
    getMarkerCoordinates,
    getMarkerDOMElement
  );
}

export default function UirasMap() {
  const [, height] = useWindowSize(250);
  const [showLabels, setShowLabels] = React.useState(false);
  const onZoomEnd = React.useCallback(() => {
    if (mapRef.current) {
      const zoom = mapRef.current.getZoom();
      setShowLabels(zoom >= 11.5);
    }
  }, []);

  const { containerRef, mapRef } = useMaplibreGL(mapOptions, onZoomEnd);
  useUirasMapMarkers(mapRef);
  React.useEffect(() => {
    mapRef.current?.resize();
  }, [height, mapRef]);

  return (
    <div className={showLabels ? "uiras-map-show-labels" : ""}>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: height ? `${height - 200}px` : "750px",
        }}
      />
    </div>
  );
}
