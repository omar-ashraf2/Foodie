import React from "react";
import { Checkbox, ListItem, ListItemText } from "@mui/material";
import { Ingredient, useSaladContext } from "../contexts/SaladContext";

type IngredientItemProps = {
  ingredient: Ingredient;
};

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient }) => {
  const { state, dispatch } = useSaladContext();
  const isSelected = state.ingredients.some(
    (item) => item.id === ingredient.id
  );

  const handleToggle = () => {
    if (isSelected) {
      dispatch({ type: "REMOVE_INGREDIENT", ingredientId: ingredient.id });
    } else {
      dispatch({ type: "ADD_INGREDIENT", ingredient });
    }
  };

  return (
    <ListItem>
      <Checkbox checked={isSelected} onChange={handleToggle} />
      <ListItemText primary={ingredient.name} />
    </ListItem>
  );
};

export default IngredientItem;
