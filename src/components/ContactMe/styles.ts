import { css } from "@emotion/css";

export const contactContainer = css`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  height: 100%;
  gap: 10px;

  svg {
    opacity: 0.9;
  }

  svg:hover {
    opacity: 1;
  }

  ::before {
    content: "";
    height: 120px;
    width: 2px;
    background: var(--primary);
    opacity: 0.7;
  }
`;
