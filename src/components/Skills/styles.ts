import { css } from "@emotion/css";

export const skillRowContainer = css`
  font-size: 18px;
  font-weight: bold;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const skillRow = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;

export const logoContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 20px;
  gap: 12px;
  svg {
    width: 70px;
    height: 70px;
  }
`;