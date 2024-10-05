import { Paper, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import SaladSizeSelector from "../SaladSizeSelector";
import IngredientCategory from "../IngredientCategory";
import { TSize } from "../../types/size";
import { SidebarStyles } from "../../styles/sidebarStyles";

const Sidebar: FC = () => {
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  const handleSizeSelection = (selectedSize: TSize) => {
    setIsSizeSelected(!!selectedSize);
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
          message="قم باختيار مكونات السلطة ( 8 مكونات )"
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
