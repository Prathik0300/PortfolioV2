import { useContext } from "react";
import { AppContextValue } from "../AppContext";

export const useAppContextValues = () => {
  const contextValue = useContext(AppContextValue);
  return contextValue;
};
