import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Ingredient } from "../types/Ingredient";
import { TSize } from "../types/size";

type SaladState = {
  size: TSize;
  ingredients: Ingredient[];
  totalPrice: number;
  validationErrors: {
    size: boolean;
    base: boolean;
    ingredient: boolean;
    protein: boolean;
    sauce: boolean;
  };
};

const initialState: SaladState = {
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

type SaladAction =
  | { type: "SET_SIZE"; size: SaladState["size"] }
  | { type: "ADD_INGREDIENT"; ingredient: Ingredient }
  | { type: "REMOVE_INGREDIENT"; ingredientId: number }
  | { type: "SET_VALIDATION_ERRORS"; errors: SaladState["validationErrors"] }
  | { type: "RESET" };

function saladReducer(state: SaladState, action: SaladAction): SaladState {
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
      const removedIngredientPrice =
        state.ingredients.find((item) => item.id === action.ingredientId)
          ?.price || 0;
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.id !== action.ingredientId
        ),
        totalPrice: state.totalPrice - removedIngredientPrice,
      };
    }
    case "SET_VALIDATION_ERRORS":
      return {
        ...state,
        validationErrors: action.errors,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const SaladContext = createContext<{
  state: SaladState;
  dispatch: React.Dispatch<SaladAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface SaladProviderProps {
  children: ReactNode;
}

export const SaladProvider: React.FC<SaladProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(saladReducer, initialState);

  return (
    <SaladContext.Provider value={{ state, dispatch }}>
      {children}
    </SaladContext.Provider>
  );
};

export const useSaladContext = () => useContext(SaladContext);
