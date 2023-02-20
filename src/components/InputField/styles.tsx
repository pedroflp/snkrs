import { colors } from "@/constants/colors";
import styled, { css } from "styled-components";
import { InputFieldProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input<InputFieldProps>`
  background-color: ${colors.grey[0]};
  border: 1px solid ${colors.grey[1]};
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  font-weight: 500;
  height: 100%;
  width: 100%;
  transition: 300ms ease;

  ${({ isLoading, type }) => (isLoading || type === "password") && css`
    padding-right: 36px;
  `};

  ${({ error }) => !!error && css`
    border-color: ${colors.red};
  `};

  &::placeholder {
    font-size: 14px;
    color: ${colors.grey[2]}
  }

  &:disabled {
    background-color: ${colors.grey[1]};
    cursor: not-allowed;
  }
`;

export const RightChildren = styled.div`
  position: absolute;
  right: 10px;
`;

export const Error = styled.h3`
  color: ${colors.red};
  font-size: 12px;
  font-weight: 700;
  text-align: right;
`