import { Paper, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import SaladSizeSelector from "../SaladSizeSelector";
import IngredientCategory from "../IngredientCategory";

const Sidebar: FC = () => {
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  const handleSizeSelection = (
    selectedSize: "small" | "medium" | "large" | null
  ) => {
    setIsSizeSelected(!!selectedSize);
  };

  return (
    <Paper
      sx={{
        width: "30%",
        backgroundColor: "#F9F9F9",
        boxSizing: "border-box",
        overflowY: "auto",
        borderRadius: "0",
        boxShadow: "-2px 0px 2px 0px #00000026",
      }}
      className="py-6 pr-8 pl-4 h-full border-b border-t border-l"
    >
      <Stack spacing={2}>
        {/* Sidebar Header */}
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "14px" }}>
          مكونات الطلب
        </Typography>

        {/* Salad Size Selector */}
        <SaladSizeSelector onSizeSelect={handleSizeSelection} />

        {/* Categories */}
        <IngredientCategory
          title="القاعدة الرئيسية"
          isSizeSelected={isSizeSelected}
          category="base"
          message="قم باختيار حجم السلطة أولاً"
        />
        <IngredientCategory
          title="المكونات"
          isSizeSelected={isSizeSelected}
          category="ingredient"
          message="قم باختيار حجم السلطة أولاً"
        />
        <IngredientCategory
          title="البروتين"
          isSizeSelected={isSizeSelected}
          category="protein"
          message="قم باختيار حجم السلطة أولاً"
        />
        <IngredientCategory
          title="الصوص"
          isSizeSelected={isSizeSelected}
          category="sauce"
          message="قم باختيار حجم السلطة أولاً"
        />
      </Stack>
    </Paper>
  );
};

export default Sidebar;
