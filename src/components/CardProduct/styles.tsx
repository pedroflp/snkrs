import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  border-radius: 24px;
  width: 300px;
  height: 400px;
  border: 1px solid ${colors.grey[1]};
  display: grid;
  grid-template-rows: repeat(2, 200px);
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: 300ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Preview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  overflow: hidden;
`;


export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform:  translateY(1rem);
  -webkit-user-drag: none;
`;

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.grey[0]};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProductLabel = styled.h3`
  font-size: 14px;
  color: ${colors.grey[2]};
  font-weight: 200;
`

export const ProductName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  max-height: 60px;
  max-width: 90%;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ProductPrice = styled.h1`
  font-weight: 900;
  font-size: 32px;
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Buttons = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: auto;
  grid-template-columns: 3fr auto;
  gap: 1rem;
`