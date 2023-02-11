import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${colors.grey[1]};
  padding: 4rem;
  min-width: 25rem;
  width: 100%;
  height: 80%;
  margin: auto;
`

export const FilterInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.h3`
  font-size: 14px
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${colors.grey[1]};
  border-radius: 8px;
  padding: 1rem;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: ${colors.grey[2]}
  }
`