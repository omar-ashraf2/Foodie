import React from "react";
import { Checkbox, FormControlLabel, Typography, Box } from "@mui/material";
import { Ingredient } from "../types/Ingredient";
import { CheckboxStyle } from "../styles/styles";

type IngredientItemProps = {
  ingredient: Ingredient;
  selected: boolean;
  onChange: (id: number) => void;
};

const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
  selected,
  onChange,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <FormControlLabel
        control={
          <Checkbox
            checked={selected}
            onChange={() => onChange(ingredient.id)}
            disableRipple
            sx={CheckboxStyle}
          />
        }
        label={
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 300,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {ingredient.name}
          </Typography>
        }
        sx={{
          margin: 0,
        }}
      />
    </Box>
  );
};

export default IngredientItem;
