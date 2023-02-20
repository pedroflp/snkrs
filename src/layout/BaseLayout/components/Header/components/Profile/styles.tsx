import styled from "styled-components";
import { colors } from "../../../../../../constants/colors";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey[1]};
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  overflow: hidden;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Letter = styled.h1`
  text-transform: uppercase;
  font-size: 1rem;
  color: ${colors.black}
`