import { css } from "@emotion/css";

export const customContentContainerForExperience = css`
  align-items: center;
`

export const experienceContainer = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 10px;
  padding: 0 30px 30px 50px;
  position: relative;
`;

export const experienceTitle = css`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;

  div:first-child {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const duration = css`
  font-size: 15px;
`;

export const stepper = css`
  .MuiStepConnector-line,
  .MuiStepContent-root {
    border-color: var(--primary);
  }

  .MuiStepLabel-root {
    padding-left: 5px;
  }

  .MuiStepLabel-label.Mui-active {
    color: var(--white);
  }

  svg {
    width: 15px;
    height: 15px;
    fill: var(--primary);
  }
`;

export const stepContent = css`
  font-size: 15px;

  li {
    margin: 10px 0;
  }
`;
export const stepLabel = css`
  .MuiStepLabel-label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 20px !important;
  }
`;
