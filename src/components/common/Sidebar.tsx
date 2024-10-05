import { Paper, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import {
  categoryTitles,
  sizeMessages,
  validationMessages,
} from "../../constants/sidebar";
import { useSaladContext } from "../../contexts/SaladContext";
import { SidebarStyles } from "../../styles/sidebarStyles";
import IngredientCategory from "../IngredientCategory";
import SaladSizeSelector from "../SaladSizeSelector";

const Sidebar: React.FC = () => {
  const { state } = useSaladContext();
  const { size } = state;

  const ingredientLimitMessage = useMemo(
    () => (size ? sizeMessages[size] : validationMessages.size),
    [size]
  );

  const isSizeSelected = !!size;

  return (
    <Paper sx={SidebarStyles}>
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "14px" }}>
          مكونات الطلب
        </Typography>
        <SaladSizeSelector />
        {(
          Object.keys(categoryTitles) as Array<keyof typeof categoryTitles>
        ).map((category) => (
          <IngredientCategory
            key={category}
            title={categoryTitles[category]}
            isSizeSelected={isSizeSelected}
            category={category}
            message={
              category === "ingredient"
                ? ingredientLimitMessage
                : validationMessages[category]
            }
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default Sidebar;
