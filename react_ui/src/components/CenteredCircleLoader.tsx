import { CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function CenteredCircleLoader() {
  return (
    <Typography sx={{ p: 2 }} align="center">
      <CircularProgress />
    </Typography>
  );
}
