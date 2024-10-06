import { ReactNode, useReducer } from "react";
import { initialState, SaladContext, saladReducer } from "./saladContext";

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

export default SaladProvider;
