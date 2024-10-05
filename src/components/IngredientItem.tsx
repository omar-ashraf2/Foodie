import React from "react";
import { Checkbox, FormControlLabel, Typography, Box } from "@mui/material";
import { Ingredient } from "../types/Ingredient";
import { CheckboxStyle } from "../styles/styles";

type IngredientItemProps = {
  ingredient: Ingredient;
  selected: boolean;
  onChange: (id: number) => void;
  disabled?: boolean;
};

const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
  selected,
  onChange,
  disabled = false,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <FormControlLabel
        control={
          <Checkbox
            checked={selected}
            onChange={() => !disabled && onChange(ingredient.id)}
            disableRipple
            sx={CheckboxStyle}
            disabled={disabled}
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
              color: disabled ? "#737171" : "inherit",
            }}
          >
            {ingredient.name}
          </Typography>
        }
        sx={{
          margin: 0,
          opacity: disabled ? 0.6 : 1,
        }}
      />
    </Box>
  );
};

export default IngredientItem;
