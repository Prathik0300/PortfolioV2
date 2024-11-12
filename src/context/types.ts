import { NavbarItemsType } from "../module/Navbar/types";
import { Dispatch, RefObject, SetStateAction } from "react";

export type AppContextValueType = {
  activeNavItem?: NavbarItemsType;
  homeRef?: null | RefObject<HTMLDivElement>;
  aboutMeRef?: null | RefObject<HTMLDivElement>;
  skillsRef?: null | RefObject<HTMLDivElement>;
  experienceRef?: null | RefObject<HTMLDivElement>;
  projectRef?: null | RefObject<HTMLDivElement>;
  footerRef?: null | RefObject<HTMLDivElement>;
  hireMeRef?: null | RefObject<HTMLAnchorElement>;
};
export type AppContextUpdaterType = {
  setActiveNavItem?: Dispatch<SetStateAction<NavbarItemsType>>;
};
