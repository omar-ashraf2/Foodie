import { Paper, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import SaladSizeSelector from "../SaladSizeSelector";
import IngredientCategory from "../IngredientCategory";

const Sidebar: FC = () => {
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  // Handler for salad size selection
  const handleSizeSelection = (
    selectedSize: "small" | "medium" | "large" | null
  ) => {
    setIsSizeSelected(!!selectedSize);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "30%",
        backgroundColor: "#F9F9F9",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
      className="pt-6 pr-8 pl-4 h-full"
    >
      <Stack spacing={3}>
        {/* Sidebar Header */}
        <Typography variant="h6" className="font-semibold">
          مكونات الطلب
        </Typography>

        {/* Salad Size Selector */}
        <SaladSizeSelector onSizeSelect={handleSizeSelection} />

        {/* Categories */}
        <IngredientCategory
          title="القاعدة الرئيسية"
          isSizeSelected={isSizeSelected}
          message="قم باختيار حجم السلطة أولاً"
        />
        <IngredientCategory
          title="المكونات"
          isSizeSelected={isSizeSelected}
          message="قم باختيار حجم السلطة أولاً"
        />
        <IngredientCategory
          title="البروتين"
          isSizeSelected={isSizeSelected}
          message="قم باختيار حجم السلطة أولاً"
        />
        <IngredientCategory
          title="الصوص"
          isSizeSelected={isSizeSelected}
          message="قم باختيار حجم السلطة أولاً"
        />
      </Stack>
    </Paper>
  );
};

export default Sidebar;
