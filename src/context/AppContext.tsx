import { createContext, useMemo, useState, useRef } from "react";
import { NavbarItems } from "../components/Navbar/constants";
import { NavbarItemsType } from "../components/Navbar/types";
import { AppContextUpdaterType, AppContextValueType } from "./types";

export const AppContextValue = createContext<AppContextValueType>({});
export const AppContextUpdater = createContext<AppContextUpdaterType>({});

const AppContextProvider = ({ children }: any) => {
  const [activeNavItem, setActiveNavItem] = useState<NavbarItemsType>(
    NavbarItems[0]
  );
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  const appContextValue = useMemo(
    () => ({ activeNavItem, homeRef, aboutMeRef, skillsRef, experienceRef }),
    [activeNavItem, homeRef, aboutMeRef, skillsRef, experienceRef]
  );
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
