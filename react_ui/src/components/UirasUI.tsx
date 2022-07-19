import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBarFooter from "./ResponsiveAppBarFooter";
import UirasListAccordion from "./UirasListAccordion";

export function UirasUI(): JSX.Element {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route index element={<UirasListAccordion />} />
      </Routes>
      <ResponsiveAppBarFooter />
    </BrowserRouter>
  );
}
