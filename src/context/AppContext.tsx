import { createContext, useMemo, useState } from "react";
import { NavbarItems } from "../components/Navbar/constants";
import { NavbarItemsType } from "../components/Navbar/types";
import { AppContextUpdaterType, AppContextValueType } from "./types";

export const AppContextValue = createContext<AppContextValueType>({});
export const AppContextUpdater = createContext<AppContextUpdaterType>({});

const AppContextProvider = ({ children }: any) => {
  const [activeNavItem, setActiveNavItem] = useState<NavbarItemsType>(
    NavbarItems[0]
  );

  const appContextValue = useMemo(() => ({ activeNavItem }), [activeNavItem]);
  const appContextUpdater = useMemo(
    () => ({ setActiveNavItem }),
    [setActiveNavItem]
  );

  return (
    <AppContextUpdater.Provider value={appContextUpdater}>
      <AppContextValue.Provider value={appContextValue}>
        {children}
      </AppContextValue.Provider>
    </AppContextUpdater.Provider>
  );
};

export default AppContextProvider;
