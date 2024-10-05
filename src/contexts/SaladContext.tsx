import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Ingredient } from "../types/Ingredient";
import { TSize } from "../types/size";

type SaladState = {
  size: TSize;
  ingredients: Ingredient[];
  totalPrice: number;
};

// Set the initial state
const initialState: SaladState = {
  size: null,
  ingredients: [],
  totalPrice: 0,
};

// Define SaladAction types
type SaladAction =
  | { type: "SET_SIZE"; size: SaladState["size"] }
  | { type: "ADD_INGREDIENT"; ingredient: Ingredient }
  | { type: "REMOVE_INGREDIENT"; ingredientId: number }
  | { type: "RESET" };

// Create the reducer function
function saladReducer(state: SaladState, action: SaladAction): SaladState {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, size: action.size, ingredients: [], totalPrice: 0 };
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
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
