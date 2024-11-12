import { createContext, useMemo, useState, useRef } from "react";
import { NavbarItems } from "../module/Navbar/constants";
import { NavbarItemsType } from "../module/Navbar/types";
import { AppContextUpdaterType, AppContextValueType } from "./types";

export const AppContextValue = createContext<AppContextValueType>({});
export const AppContextUpdater = createContext<AppContextUpdaterType>({});

const AppContextProvider = ({ children }: any) => {
  const [activeNavItem, setActiveNavItem] = useState<NavbarItemsType>(
    NavbarItems[0]
  );
  const hireMeRef = useRef(null);
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const footerRef = useRef(null);

  const appContextValue = useMemo(
    () => ({
      activeNavItem,
      homeRef,
      aboutMeRef,
      skillsRef,
      experienceRef,
      projectRef,
      hireMeRef,
      footerRef,
    }),
    [
      activeNavItem,
      homeRef,
      aboutMeRef,
      skillsRef,
      experienceRef,
      projectRef,
      hireMeRef,
      footerRef,
    ]
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
