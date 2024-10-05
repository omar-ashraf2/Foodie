import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  categoryTitles,
  sizeMessages,
  validationMessages,
} from "../../constants/sidebar";
import { SidebarStyles } from "../../styles/sidebarStyles";
import { TSize } from "../../types/size";
import IngredientCategory from "../IngredientCategory";
import SaladSizeSelector from "../SaladSizeSelector";

const Sidebar: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<TSize | null>(null);

  const handleSizeSelection = (size: TSize) => {
    setSelectedSize(size);
  };

  const getIngredientLimitMessage = () =>
    selectedSize ? sizeMessages[selectedSize] : validationMessages.size;

  const isSizeSelected = !!selectedSize;

  return (
    <Paper sx={SidebarStyles}>
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "14px" }}>
          مكونات الطلب
        </Typography>

        <SaladSizeSelector onSizeSelect={handleSizeSelection} />

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
                ? getIngredientLimitMessage()
                : validationMessages[category]
            }
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default Sidebar;
