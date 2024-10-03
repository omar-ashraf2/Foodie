import React, { createContext, useReducer, useContext, ReactNode } from "react";

export type Ingredient = {
  id: number;
  name: string;
  category: "base" | "ingredient" | "protein" | "sauce";
  price: number;
  image: string;
};

type SaladState = {
  size: "small" | "medium" | "large" | null;
  ingredients: Ingredient[];
  totalPrice: number;
};

const initialState: SaladState = {
  size: null,
  ingredients: [],
  totalPrice: 0,
};

type SaladAction =
  | { type: "SET_SIZE"; size: SaladState["size"] }
  | { type: "ADD_INGREDIENT"; ingredient: Ingredient }
  | { type: "REMOVE_INGREDIENT"; ingredientId: number }
  | { type: "RESET" };

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
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.id !== action.ingredientId
        ),
        totalPrice:
          state.totalPrice -
          state.ingredients.find((item) => item.id === action.ingredientId)
            ?.price,
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

export const SaladProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(saladReducer, initialState);

  return (
    <SaladContext.Provider value={{ state, dispatch }}>
      {children}
    </SaladContext.Provider>
  );
};

export const useSaladContext = () => useContext(SaladContext);
