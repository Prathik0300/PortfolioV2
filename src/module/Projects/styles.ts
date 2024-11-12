import { preventSelect } from "@/src/lib/common.styles";
import { css } from "@emotion/css";

export const project_tile = css`
  display: flex;
  flex-direction: column;
  width: 85%;
  border: 2px solid var(--primaryBorder);
  border-radius: 20px;
  padding: 25px;
  gap: 20px;
  transition: all 0.4s ease-in-out;
  ${preventSelect}
  &:hover {
    transition: all 0.4s ease-in-out;
    -webkit-box-shadow: 0px 0px 38px 0px rgba(239, 180, 53, 0.9);
    -moz-box-shadow: 0px 0px 38px 0px rgba(239, 180, 53, 0.9);
    box-shadow: 0px 0px 38px 0px rgba(239, 180, 53, 0.9);
  }
`;

export const projectTitleContainer = css`
  font-size: 25px;
  color: var(--primary);
  font-weight: bold;
`;

export const projectDescriptionContainer = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 5%;
`;

export const projectDescriptionText = css`
  width: 40%;
  text-align: left;
`;

export const projectImageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100%;
  position: relative;
`;

export const knowMoreBtn = css`
  font-size: 15px;
  text-transform: capitalize;
  font-weight: bold;
  position: relative;
  letter-spacing: 0;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active {
    letter-spacing: 5px;
  }
`;

export const knowMoreBtnAction = css`
  align-self: end;



  &:after,
  &:before {
    backface-visibility: hidden;
    border: 1px solid #000;
    bottom: 0px;
    content: "";
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 280ms ease-in-out;
    width: 0;
    height: 0px;
  }

  &:hover:after,
  &:hover:before {
    backface-visibility: hidden;
    border-color: var(--primary);
    transition: width 350ms ease-in-out;
    width: 90%;
  }

  &:hover:before {
    bottom: auto;
    top: 0;
    width: 90%;
  }
`;
