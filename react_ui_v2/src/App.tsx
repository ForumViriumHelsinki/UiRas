import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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
      <Typography component="div" className="App">
        <header className="App-header">
          <UirasUI />
        </header>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
