import { css } from "@emotion/css";

export const footerContainer = css`
  background-color: var(--primary);
  min-height: 300px;
`;
export const directContactContainer = css`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #000 !important;
`;

export const directContactTitle = css`
  font-size: 18px;
  font-weight: bold;
`;

export const directContactLinks = css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;
