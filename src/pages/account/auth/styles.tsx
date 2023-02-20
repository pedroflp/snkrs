import { colors } from "@/constants/colors";
import Link from "next/link";
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

export const ErrorMessager = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${colors.red};
  color: ${colors.white};
  font-weight: 700;
  margin-top: 1rem;
  font-size: 14px;
`

export const CreateAccountRedirect = styled(Link)`
  color: ${colors.black};
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
`