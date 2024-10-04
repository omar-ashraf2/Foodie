import { Box } from "@mui/material";
import { FC } from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import SaladVisualizer from "./SaladVisualizer";

const SaladPageLayout: FC = () => {
  return (
    <Box className="flex flex-col h-screen">
      {/* Header */}
      <Box component="header" width="100%">
        <Header />
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        display="flex"
        flex="1"
        width="100%"
        overflow="auto"
      >
        {/* Sidebar Section */}
        <Sidebar />

        {/* Visualizer Section */}
        <Box
          component="section"
          width="70%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SaladVisualizer />
        </Box>
      </Box>
    </Box>
  );
};

export default SaladPageLayout;
