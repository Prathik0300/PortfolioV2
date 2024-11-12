import { downloadResume } from "../utils";

export const NavbarItems = [
  {
    displayName: "Home",
    id: "home",
    navIndex: 0,
    isCustomHandler: false,
  },
  {
    displayName: "About",
    id: "aboutMe",
    navIndex: 1,
    isCustomHandler: false,
  },
  {
    displayName: "Resume",
    id: "resume",
    navIndex: 2,
    isCustomHandler: true,
    handler: downloadResume,
  },
  {
    displayName: "Skills",
    id: "skills",
    navIndex: 3,
    isCustomHandler: false,
  },
  {
    displayName: "Experience",
    id: "experience",
    navIndex: 4,
    isCustomHandler: false,
  },
  {
    displayName: "Projects",
    id: "projects",
    navIndex: 5,
    isCustomHandler: false,
  },
  {
    displayName: "Contact",
    id: "contact",
    navIndex: 6,
    isCustomHandler: false,
  },
] as const;