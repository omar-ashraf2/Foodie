import { FC } from "react";
import { Box, Paper, Stack } from "@mui/material";
import Header from "./common/Header";
import IngredientCategory from "./IngredientCategory";
import PriceSummary from "./PriceSummary";
import SaladSizeSelector from "./SaladSizeSelector";
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
        {/* Sidebar using MUI Paper */}
        <Paper
          elevation={3}
          sx={{
            width: "25%",
            backgroundColor: "#F9F9F9",
            padding: "16px",
            height: "100%",
            boxSizing: "border-box",
            overflowY: "auto",
          }}
        >
          <Stack spacing={2}>
            <SaladSizeSelector />
            <IngredientCategory title="Base Ingredients" />
            <IngredientCategory title="Ingredients" />
            <IngredientCategory title="Protein" />
            <IngredientCategory title="Sauce" />
            <PriceSummary />
          </Stack>
        </Paper>

        {/* Visualizer Section */}
        <Box
          component="section"
          width="75%"
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
