import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { UirasUI } from "./components/UirasUI";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 14,
    allVariants: {
      fontFamily: "Open Sans",
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UirasUI />
    </ThemeProvider>
  );
}

export default App;
