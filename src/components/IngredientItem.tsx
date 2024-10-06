import React from "react";
import { Checkbox, FormControlLabel, Typography, Box } from "@mui/material";
import { Ingredient } from "../types/Ingredient";
import { CheckboxStyle } from "../styles/IngredientStyles";

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
    <Box display="flex" alignItems="center" width="100%">
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
          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: "6px", md: "4px" }}
            sx={{
              width: { xs: "100%", md: "auto" },
              whiteSpace: "nowrap",
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 300,
                flexShrink: 0,
                color: disabled ? "#737171" : "inherit",
              }}
            >
              {ingredient.name}
            </Typography>

            {ingredient.extraPrice && (
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#A3A5AD",
                  flexShrink: 0,
                }}
              >
                ( +{ingredient.extraPrice} جـ )
              </Typography>
            )}
          </Box>
        }
        sx={{
          margin: 0,
          opacity: disabled ? 0.6 : 1,
          width: "100%",
        }}
      />
    </Box>
  );
};

export default IngredientItem;
