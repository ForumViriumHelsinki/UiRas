import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { UirasUI } from "./components/UirasUI";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Open Sans",
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <UirasUI />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
