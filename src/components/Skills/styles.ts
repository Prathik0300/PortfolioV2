import { css } from "@emotion/css";

export const skillsContainer = css`
  height: 100%;
  width: 100%;
  padding: 40px;
  display: flex;
  position: relative;
`;

export const titleContainer = css`
  width: 20%;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const titleContent = (isSectionInView: boolean) => css`
  position: ${isSectionInView ? "sticky" : ""};
  top: 5%;
  font-size: 30px;
  font-weight: bold;
  text-decoration: underline;
  color: var(--primary);
`;

export const contentContainer = css`
  width: 80%;
  font-size: 30px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  text-align: justify;
`;
