import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { Ingredient } from "../contexts/SaladContext";
import {
  AccordionStyle,
  AccordionSummaryStyle,
  SubtitleStyle,
} from "../styles/styles";
import IngredientItem from "./IngredientItem";

type IngredientCategoryProps = {
  title: string;
  isSizeSelected: boolean;
  message: string;
};

const IngredientCategory: React.FC<IngredientCategoryProps> = ({
  title,
  isSizeSelected,
  message,
}) => {
  const ingredients = [
    {
      id: 1,
      name: "Lettuce",
      category: "base",
      price: 10,
      image: "lettuce.png",
    },
    { id: 2, name: "Tomato", category: "base", price: 8, image: "tomato.png" },
  ] as Ingredient[];

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
          ingredients.map((ingredient) => (
            <IngredientItem key={ingredient.id} ingredient={ingredient} />
          ))
        ) : (
          <Box>
            <Typography color="textSecondary" sx={SubtitleStyle}>
              {message}
            </Typography>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
