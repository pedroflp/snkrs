import { colors } from "@/constants/colors";
import { AiOutlineLoading } from "@react-icons/all-files/ai/AiOutlineLoading";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled(AiOutlineLoading).attrs({
  size: 50
})`
  animation: ${loading} 1s infinite linear;
`

export const Message = styled.h1`
  font-size: 22px;
  text-align: center;
  color: ${({ color }) => color || colors.black}
`