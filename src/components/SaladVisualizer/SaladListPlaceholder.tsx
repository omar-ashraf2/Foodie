import { Box, Typography } from "@mui/material";
import React from "react";
import SaladImage from "../../assets/salad.png";

const SaladListPlaceholder: React.FC = () => (
  <Box className="flex flex-col items-center justify-center h-full text-center">
    <Box className="w-48 h-44 mb-4">
      <img
        src={SaladImage}
        alt="Salad Bowl"
        className="w-full h-full object-contain"
      />
    </Box>
    <Typography variant="h5" align="center">
      ابدأ بتحضير طبق <br /> السلطة الخاص بك!
    </Typography>
  </Box>
);

export default SaladListPlaceholder;
