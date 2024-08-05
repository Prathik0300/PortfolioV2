import { createContext, useMemo } from "react";
import { AppContextUpdaterType, AppContextValueType } from "./types";

export const AppContextValue = createContext<AppContextValueType>({});
export const AppContextUpdater = createContext<AppContextUpdaterType>({});

const AppContextProvider = ({ children }: any) => {
  const appContextValue = useMemo(() => ({}), []);
  const appContextUpdater = useMemo(() => ({}), []);

  return (
    <AppContextUpdater.Provider value={appContextValue}>
      <AppContextValue.Provider value={appContextUpdater}>
        {children}
      </AppContextValue.Provider>
    </AppContextUpdater.Provider>
  );
};

export default AppContextProvider;
