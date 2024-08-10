import { css } from "@emotion/css";

export const container = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  gap: 30px;
  padding: 40px;
`;

export const titleContainer = css`
  width: 20%;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const titleContent = css`
  position: sticky;
  top: 5%;
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  color: var(--primary);
`;

export const contentContainer = css`
  width: 80%;
  font-size: 25px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  text-align: justify;
`;
