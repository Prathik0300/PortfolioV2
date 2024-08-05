import { useContext } from "react";
import { AppContextUpdater } from "../AppContext";

export const useAppContextUpdater = () => {
  const contextUpdaterValue = useContext(AppContextUpdater) || {};
  return contextUpdaterValue;
};
