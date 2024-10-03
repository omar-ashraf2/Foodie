import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import IngredientItem from "./IngredientItem";
import { Ingredient } from "../contexts/SaladContext";
type IngredientCategoryProps = {
  title: string;
};

const IngredientCategory: React.FC<IngredientCategoryProps> = ({ title }) => {
  // Placeholder ingredients until API integration
  const ingredients = [
    {
      id: 1,
      name: "Lettuce",
      category: "base",
      price: 10,
      image: "lettuce.png",
    },
    {
      id: 2,
      name: "Tomato",
      category: "base",
      price: 8,
      image: "tomato.png",
    },
  ] as Ingredient[];

  return (
    <Accordion>
      <AccordionSummary>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {ingredients.map((ingredient) => (
          <IngredientItem key={ingredient.id} ingredient={ingredient} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
