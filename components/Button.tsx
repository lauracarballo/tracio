import styled from "styled-components";
import { primaryTextColor } from "../utils";

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${primaryTextColor};
  border-radius: 3px;
  cursor: pointer;
  color: ${primaryTextColor};
  padding: 8px;

  &:focus {
    outline: 3px solid ${primaryTextColor};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;
