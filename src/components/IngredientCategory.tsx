import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useCallback, useMemo } from "react";
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
} from "../styles/IngredientStyles";
import { Ingredient } from "../types/Ingredient";
import IngredientItem from "./IngredientItem";
import { useSaladContext } from "../contexts/saladContext";

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

  const categoryIngredients = useMemo(
    () => ({
      base: baseIngredients,
      ingredient: ingredients,
      protein,
      sauce,
    }),
    []
  );

  const selectedCount = useMemo(
    () => state.ingredients.filter((item) => item.category === category).length,
    [state.ingredients, category]
  );

  const getCategoryLimit = useCallback(
    () =>
      category === "ingredient"
        ? CATEGORY_LIMITS.ingredient[state.size || "small"]
        : CATEGORY_LIMITS[category],
    [state.size, category]
  );

  const maxReached = useMemo(
    () => selectedCount >= getCategoryLimit(),
    [selectedCount, getCategoryLimit]
  );

  const handleIngredientChange = (id: number) => {
    const ingredient = categoryIngredients[category].find(
      (item) => item.id === id
    );
    if (!ingredient) return;

    const isSelected = state.ingredients.some((item) => item.id === id);

    if (isSelected) {
      dispatch({ type: "REMOVE_INGREDIENT", ingredientId: id });
    } else if (selectedCount < getCategoryLimit()) {
      dispatch({ type: "ADD_INGREDIENT", ingredient });
    }
  };

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
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: { xs: "12px", md: "8px" },
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
          <Typography
            sx={{
              ...SubtitleStyle,
              color: hasValidationError ? "#E50606" : "inherit",
            }}
          >
            قم باختيار حجم السلطة أولاً
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
