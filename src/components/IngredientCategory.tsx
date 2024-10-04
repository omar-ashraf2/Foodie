import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import IngredientItem from "./IngredientItem";
import { Ingredient } from "../contexts/SaladContext";

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
    <Accordion disabled={!isSizeSelected}>
      <AccordionSummary>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isSizeSelected ? (
          // Show ingredients if size is selected
          ingredients.map((ingredient) => (
            <IngredientItem key={ingredient.id} ingredient={ingredient} />
          ))
        ) : (
          <Box p={2}>
            <Typography color="textSecondary">{message}</Typography>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
