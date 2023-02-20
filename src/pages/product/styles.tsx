import { colors } from "@/constants/colors";
import styled, { css } from "styled-components";

export const Content = styled.div`
  background-color: ${colors.white};
  display: flex;
  margin: auto;
  justify-content: flex-end;
  height: 100%;
  position: relative;
`

export const MediaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  overflow-y: scroll;
  padding: 4rem;
  background-color: ${colors.grey[0]};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none; 
`

export const Media = styled.div<{
  mainPreview?: boolean;
}>`
  border: 1px solid ${colors.grey[1]};
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  background-color: ${colors.white};

  ${({ mainPreview }) => mainPreview ? css`
    width: 100%;
    height: 600px;
  ` : css`
    width: calc(${100/2}% - 1rem);
    height: 300px;
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  padding: 4rem;
  transition: 500ms ease-in;

  @media screen and (max-width: 1500px) {
    width: 90%;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
`

export const Category = styled.h3`
  font-size: 20px;
  color: ${colors.grey[2]};
  font-weight: 400;
`

export const Name = styled.h1`
  font-size: 44px;
  font-weight: 700;
`

export const SizeSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grey[2]};
`

export const SizeList = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Size = styled.button<{
  selected: boolean
}>`
  width: 48px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid;
  background: none;
  transition: 300ms ease-in-out;
  font-weight: 400;

  ${({ selected }) => selected
    ? css`
      border-color: ${colors.black};
      color: ${colors.black};
    `
    : css`
      border-color: ${colors.grey[1]};
      color: ${colors.grey[3]};
    `
  };
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

export const Price = styled.h1`
  font-size: 48px;
  font-weight: 900;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 70%;
`

export const Shipping = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid ${colors.grey[1]};
  padding-top: 2rem;
  margin-top: 1rem;
`

export const ShippingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-top: 1rem;
`

export const ShippingOptions = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

export const ShippingOption = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  gap: 1rem;
  border: 1px solid ${colors.grey[1]};
  background-color: ${colors.grey[0]};
  transition: 300ms ease-in-out;
`

export const ShippingInformations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  text-align: left;
`

export const ShippingMethodName = styled.h1`
  font-size: 12px;
`
export const ShippingMethodPrice = styled.h2`
  font-size: 14px;
  font-weight: 700;
`
export const ShippingDeliveryDate = styled.h3`
  font-size: 11px;
  font-weight: 300;
  margin-top: 4px;
  color: ${colors.grey[3]}
`