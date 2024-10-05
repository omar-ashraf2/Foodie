import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useSaladContext } from "../contexts/SaladContext";
import {
  baseIngredients,
  ingredients,
  protein,
  sauce,
} from "../constants/ingredients";
import {
  AccordionStyle,
  AccordionSummaryStyle,
  SubtitleStyle,
} from "../styles/styles";
import IngredientItem from "./IngredientItem";
import { Ingredient } from "../types/Ingredient";

const CATEGORY_LIMITS = {
  base: 2,
  ingredient: {
    small: 5,
    medium: 6,
    large: 8,
  },
  protein: 1,
  sauce: 1,
};

type IngredientCategoryProps = {
  title: string;
  isSizeSelected: boolean;
  category: Ingredient["category"];
  message: string;
};

const IngredientCategory: React.FC<IngredientCategoryProps> = ({
  title,
  isSizeSelected,
  category,
  message,
}) => {
  const { state, dispatch } = useSaladContext();
  const categoryIngredients: { [key in Ingredient["category"]]: Ingredient[] } =
    {
      base: baseIngredients,
      ingredient: ingredients,
      protein,
      sauce,
    };

  const getCategoryLimit = () =>
    category === "ingredient"
      ? CATEGORY_LIMITS.ingredient[state.size || "small"]
      : CATEGORY_LIMITS[category];

  const handleIngredientChange = (id: number) => {
    const ingredient = categoryIngredients[category].find(
      (item) => item.id === id
    );
    if (ingredient) {
      if (state.ingredients.some((item) => item.id === id)) {
        dispatch({ type: "REMOVE_INGREDIENT", ingredientId: id });
      } else if (
        state.ingredients.filter((item) => item.category === category).length <
        getCategoryLimit()
      ) {
        dispatch({ type: "ADD_INGREDIENT", ingredient });
      }
    }
  };

  const selectedCount = state.ingredients.filter(
    (item) => item.category === category
  ).length;
  const maxReached = selectedCount >= getCategoryLimit();
  const hasValidationError = state.validationErrors[category];
  return (
    <Accordion sx={AccordionStyle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#333" }} />}
        sx={AccordionSummaryStyle}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isSizeSelected ? (
          <>
            <Typography
              sx={{
                ...SubtitleStyle,
                color: hasValidationError ? "#E50606" : "inherit",
              }}
            >
              {message}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                width: "100%",
              }}
            >
              {categoryIngredients[category].map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  ingredient={ingredient}
                  selected={state.ingredients.some(
                    (item) => item.id === ingredient.id
                  )}
                  onChange={handleIngredientChange}
                  disabled={
                    maxReached &&
                    !state.ingredients.some((item) => item.id === ingredient.id)
                  }
                />
              ))}
            </Box>
          </>
        ) : (
          <Typography sx={{ ...SubtitleStyle, color: "#E50606" }}>
            قم باختيار حجم السلطة أولاً
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
