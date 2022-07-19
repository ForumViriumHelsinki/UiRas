// @vitest-environment happy-dom
import { render, screen } from "@testing-library/react";
import React from "react";
import { test } from "vitest";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/UiRaS/i);
  expect(linkElement).toBeInTheDocument();
});
