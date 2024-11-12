import { css } from "@emotion/css";

export const HomeContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 140px);
  gap: 30px;
  padding: 30px;
`;

export const primaryColor = css`
  color: var(--primary);
`;

export const homeContentContainer = css`
  font-size: 80px;
  font-weight: bold;
  width: 90%;
`;

export const greetingContainer = css`
  font-size: 18px;
  color: var(--primary);
  font-weight: bold;
`;

export const jobInterest = css`
  padding-top: 10px;
  font-size: 30px;
  color: var(--white);
`;

export const buttonContainer = css`
  display: flex;
  align-items: start;
  gap: 15px;
  padding: 20px 0;
  font-size: 14px;
`;

export const btn = css`
  padding: 13px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const hireMeBtn = css`
  background: var(--primary);
  color: var(--black);
  border: 1px solid black;
  position: relative;
  :hover {
    background: ;
  }
`;

export const myWorksBtn = css`
  background: var(--black);
  color: var(--white);
  border: 1px solid white;
`;

export const chevronContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const popupRefStyle = css`
  display: none;
`