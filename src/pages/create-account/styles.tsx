import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const PasswordFields = styled.div`
  gap: 1rem;
  display: flex;
  width: 400px;
`

export const ErrorMessager = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${colors.red};
  color: ${colors.white};
  font-weight: 700;
  margin-top: 1rem;
  font-size: 14px;
`