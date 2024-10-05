import { Paper, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import SaladSizeSelector from "../SaladSizeSelector";
import IngredientCategory from "../IngredientCategory";
import { TSize } from "../../types/size";
import { SidebarStyles } from "../../styles/sidebarStyles";

const Sidebar: FC = () => {
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState<TSize | null>(null);

  const handleSizeSelection = (selectedSize: TSize) => {
    setIsSizeSelected(!!selectedSize);
    setSelectedSize(selectedSize);
  };

  const getIngredientLimitMessage = () => {
    if (!selectedSize) return "قم باختيار مكونات السلطة";
    switch (selectedSize) {
      case "small":
        return "قم باختيار مكونات السلطة ( 5 مكونات )";
      case "medium":
        return "قم باختيار مكونات السلطة ( 6 مكونات )";
      case "large":
        return "قم باختيار مكونات السلطة ( 8 مكونات )";
      default:
        return "قم باختيار مكونات السلطة";
    }
  };
  return (
    <Paper sx={SidebarStyles}>
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
          message="قم باختيار قاعدة السلطة الرئيسية (مكونين على الأكثر)"
        />
        <IngredientCategory
          title="المكونات"
          isSizeSelected={isSizeSelected}
          category="ingredient"
          message={getIngredientLimitMessage()}
        />
        <IngredientCategory
          title="البروتين"
          isSizeSelected={isSizeSelected}
          category="protein"
          message="قم باختيار بروتين واحد للسلطة الخاصة بك"
        />
        <IngredientCategory
          title="الصوص"
          isSizeSelected={isSizeSelected}
          category="sauce"
          message="قم باختيار صوص واحد للسلطة الخاصة بك"
        />
      </Stack>
    </Paper>
  );
};

export default Sidebar;
