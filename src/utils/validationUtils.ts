import { Ingredient } from "../types/Ingredient";
import { TSize } from "../types/size";

type ValidationErrors = {
  size: boolean;
  base: boolean;
  ingredient: boolean;
  protein: boolean;
  sauce: boolean;
};

export const validateSaladSelection = (
  size: TSize | null,
  ingredients: Ingredient[]
): ValidationErrors => {
  return {
    size: !size,
    base: ingredients.filter((item) => item.category === "base").length < 1,
    ingredient:
      ingredients.filter((item) => item.category === "ingredient").length <
      (size === "large" ? 8 : size === "medium" ? 6 : 5),
    protein:
      ingredients.filter((item) => item.category === "protein").length < 1,
    sauce: ingredients.filter((item) => item.category === "sauce").length < 1,
  };
};
