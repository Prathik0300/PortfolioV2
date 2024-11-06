import { useAppContextUpdater } from "@/src/context/hooks/useAppContextUpdater";
import { useAppContextValues } from "@/src/context/hooks/useAppContextValues";
import { NavbarItems } from "./constants";
import {
  navbarContainer,
  navbarContentWrapper,
  navbarContent,
  activeContent,
} from "./styles";
import classNames from "classnames";
import { NavbarItemsType } from "./types";
import { useEffect } from "react";
import { useScrollTo } from "@/src/lib/hooks/useScrollTo";

const Navbar = () => {
  const { activeNavItem } = useAppContextValues();
  const { setActiveNavItem } = useAppContextUpdater();
  const { scrollToId } = useScrollTo();

  useEffect(() => {
    if (activeNavItem?.isCustomHandler && activeNavItem?.handler) {
      activeNavItem.handler();
    }
  }, [activeNavItem]);

  const handleNavItemClick = (navItem: NavbarItemsType) => {
    return () => {
      if (activeNavItem?.id === navItem.id) {
        scrollToId(navItem.id);
        return;
      }
      if (setActiveNavItem) {
        setActiveNavItem((prevNavItem: NavbarItemsType) => ({
          ...navItem,
          isElementLeftOfActiveNavItem: navItem.navIndex < prevNavItem.navIndex,
        }));
        scrollToId(navItem.id);
      }
    };
  };

  return (
    <div className={navbarContainer}>
      <div className={navbarContentWrapper}>
        {NavbarItems.map((navItem) => {
          const isActive = activeNavItem?.id === navItem.id;
          const isElementLeftOfActiveNavItem =
            activeNavItem?.isElementLeftOfActiveNavItem || false;
          return (
            <div
              key={`navItem-${navItem.id}`}
              className={classNames(navbarContent, {
                [activeContent(isElementLeftOfActiveNavItem)]: isActive,
              })}
              onClick={handleNavItemClick(navItem)}
            >
              {navItem.displayName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
