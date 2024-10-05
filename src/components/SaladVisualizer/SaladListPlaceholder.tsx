import { Box, Typography } from "@mui/material";
import React from "react";
import SaladImage from "../../assets/salad.png";

const SaladListPlaceholder: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100%"
  >
    <Box width="192px" height="176px" mb={2}>
      <img
        src={SaladImage}
        alt="Salad Bowl"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
    <Typography variant="h5" align="center">
      ابدأ بتحضير طبق <br /> السلطة الخاص بك!
    </Typography>
  </Box>
);

export default SaladListPlaceholder;
