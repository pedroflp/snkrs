import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled(Link)`
  border-radius: 24px;
  text-decoration: none;
  color: black;
  width: 300px;
  height: max-content;
  border: 1px solid ${colors.grey[1]};
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: 300ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Preview = styled.div`
  width: 300px;
  height: 160px;
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
  -webkit-user-drag: none;
  mix-blend-mode: multiply;
`;

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.grey[0]};
  gap: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const ProductLabel = styled.h3`
  font-size: 12px;
  color: ${colors.grey[2]};
  font-weight: 200;
`

export const ProductName = styled.h1`
  font-size: 18px;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ProductPrice = styled.h1`
  font-weight: 700;
  font-size: 14px;
`