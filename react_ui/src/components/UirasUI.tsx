import loadable from "@loadable/component";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CenteredCircleLoader from "./CenteredCircleLoader";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBarFooter from "./ResponsiveAppBarFooter";
import UirasListAccordion from "./UirasListAccordion";

const LazyUirasMap = loadable(() => import("./map/UirasMap"), {
  fallback: <CenteredCircleLoader />,
});

export function UirasUI(): JSX.Element {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route index element={<UirasListAccordion />} />
        <Route path="kartta" element={<LazyUirasMap />} />
      </Routes>
      <ResponsiveAppBarFooter />
    </BrowserRouter>
  );
}
