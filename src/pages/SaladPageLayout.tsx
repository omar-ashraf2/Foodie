import { Box } from "@mui/material";
import { FC } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import SaladVisualizer from "../components/SaladVisualizer";

const SaladPageLayout: FC = () => {
  return (
    <Box className="flex flex-col h-screen">
      {/* Header */}
      <Box component="header" width="100%">
        <Header />
      </Box>

      <Box
        component="main"
        display="flex"
        flex="1"
        width="100%"
        overflow="auto"
      >
        <Sidebar />

        <SaladVisualizer />
      </Box>
    </Box>
  );
};

export default SaladPageLayout;
