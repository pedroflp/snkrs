import { colors } from "@/constants/colors";
import styled, { css } from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  margin: auto;
  padding: 0 4rem;
  width: 80%;
  height: 100%;
  gap: 5rem;
  position: relative;
`

export const MediaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;
  overflow-y: scroll;
  padding: 4rem 1rem;

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

  ${({ mainPreview }) => mainPreview ? css`
    width: 100%;
    height: 600px;
  ` : css`
    width: 48%;
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
  justify-content: space-between;
  gap: 2rem;
  height: 600px;
  padding: 4rem 0;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  font-size: 50px;
  font-weight: 700;
`

export const DescriptionContainer = styled.p`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 30px;
  overflow: hidden;
`

export const Description = styled.span<{
  showFull: boolean
}>`
  font-size: 16px;
  color: ${colors.grey[3]};
  font-weight: 400;
  transition: all 300ms ease;
  overflow: hidden;
  max-height: ${({ showFull }) => showFull ? 'auto' : '60px'};
`

export const SeeMoreDescription = styled.button<{
  showFull: boolean;
}>`
  border: none;
  background: none;
  width: 100%;
  color: ${colors.grey[3]};
  font-weight: 700;
  padding-top: 8px;
  font-size: 16px;
  position: absolute;
  bottom: 0px;
  transition: all 300ms ease;
  
  ${({ showFull }) => !showFull && css`
    box-shadow: 0px -10px 50px rgba(0, 0, 0, 0.15);
  `}
`

export const SizeSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SizeTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grey[2]};
`

export const SizeList = styled.div`
  display: flex;
  gap: 1rem;
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
      border-color: ${colors.grey[2]};
      color: ${colors.grey[3]};
    `
  };
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Price = styled.h1`
  font-size: 40px;
  font-weight: 900;
`

export const Buttons = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% auto;
`