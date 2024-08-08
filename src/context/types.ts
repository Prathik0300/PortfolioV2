import { NavbarItemsType } from "../components/Navbar/types";

export type AppContextValueType = {
  activeNavItem?: NavbarItemsType;
};
export type AppContextUpdaterType = {
  setActiveNavItem?: React.Dispatch<React.SetStateAction<NavbarItemsType>>;
};
