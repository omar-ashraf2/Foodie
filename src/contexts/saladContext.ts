import { createContext, useContext } from "react";
import { Ingredient } from "../types/Ingredient";
import { TSize } from "../types/size";

export type ValidationErrors = {
  size: boolean;
  base: boolean;
  ingredient: boolean;
  protein: boolean;
  sauce: boolean;
};

export type SaladState = {
  size: TSize;
  ingredients: Ingredient[];
  totalPrice: number;
  validationErrors: ValidationErrors;
};

export type SaladAction =
  | { type: "SET_SIZE"; size: SaladState["size"] }
  | { type: "ADD_INGREDIENT"; ingredient: Ingredient }
  | { type: "REMOVE_INGREDIENT"; ingredientId: number }
  | { type: "SET_VALIDATION_ERRORS"; errors: ValidationErrors }
  | { type: "RESET" };

export const initialState: SaladState = {
  size: null,
  ingredients: [],
  totalPrice: 0,
  validationErrors: {
    size: false,
    base: false,
    ingredient: false,
    protein: false,
    sauce: false,
  },
};

export const saladReducer = (
  state: SaladState,
  action: SaladAction
): SaladState => {
  switch (action.type) {
    case "SET_SIZE":
      return {
        ...state,
        size: action.size,
        ingredients: [],
        totalPrice: 0,
        validationErrors: { ...state.validationErrors, size: false },
      };
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
        validationErrors: {
          ...state.validationErrors,
          [action.ingredient.category]: false,
        },
        totalPrice: state.totalPrice + action.ingredient.price,
      };
    case "REMOVE_INGREDIENT": {
      const removedIngredient = state.ingredients.find(
        (item) => item.id === action.ingredientId
      );
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.id !== action.ingredientId
        ),
        totalPrice: state.totalPrice - (removedIngredient?.price || 0),
      };
    }
    case "SET_VALIDATION_ERRORS":
      return { ...state, validationErrors: action.errors };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const SaladContext = createContext<{
  state: SaladState;
  dispatch: React.Dispatch<SaladAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useSaladContext = () => useContext(SaladContext);
