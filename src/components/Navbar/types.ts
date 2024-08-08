export type NavbarItemsType = {
  displayName: string;
  id: string;
  navIndex: number;
  isCustomHandler: boolean;
  handler?: () => void;
  isElementLeftOfActiveNavItem?: boolean;
};
