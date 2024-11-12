import { css } from "@emotion/css";

export const formContainer = css`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const formTitle = css`
  color: var(--black);
  font-size: 16px;
  font-weight: bold;
`;

export const inputField = css`
  margin: 0;
`;

export const textField = css`
  color: var(--black);

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      color: var(--primary);
    }
  }
`;
