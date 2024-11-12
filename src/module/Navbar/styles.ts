import { css } from "@emotion/css";

export const navbarContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: var(--black) !important;
  z-index: 2;
`;

export const navbarContentWrapper = css`
  width: 90%;
  max-width: max-content;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--black) !important;
  z-index: 2;
`;

export const navbarContent = css`
  margin: 0 10px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  position: relative;
  transition: all 0.3s ease-in-out;
  opacity: 0.75;

  &::after {
    content: "";
    width: 0px;
    position: absolute;
  }

  &:hover {
    opacity: 1;
  }
`;

export const activeContent = (isElementLeftOfActiveNavItem: boolean) => css`
  opacity: 1;
  &::after {
    opacity: 1;
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    ${isElementLeftOfActiveNavItem ? "right: 0;" : "left: 0;"};
    bottom: -3px;
    background-color: var(--primary);
    transition: 300ms;
  }
`;
