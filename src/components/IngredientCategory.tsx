import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import {
  baseIngredients,
  ingredients,
  protein,
  sauce,
} from "../constants/ingredients";
import { useSaladContext } from "../contexts/SaladContext";

import {
  AccordionStyle,
  AccordionSummaryStyle,
  SubtitleStyle,
} from "../styles/styles";
import { Ingredient } from "../types/Ingredient";
import IngredientItem from "./IngredientItem";

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
      protein: protein,
      sauce: sauce,
    };

  const handleIngredientChange = (id: number) => {
    const ingredient = categoryIngredients[category].find(
      (item) => item.id === id
    );
    if (ingredient) {
      if (state.ingredients.some((item) => item.id === id)) {
        dispatch({ type: "REMOVE_INGREDIENT", ingredientId: id });
      } else {
        dispatch({ type: "ADD_INGREDIENT", ingredient });
      }
    }
  };

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
            <Typography sx={SubtitleStyle}>{message} </Typography>
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
                />
              ))}
            </Box>
          </>
        ) : (
          <Typography sx={SubtitleStyle}>
            قم باختيار حجم السلطة أولاً
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
