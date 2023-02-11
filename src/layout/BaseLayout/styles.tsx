import styled from "styled-components";
import { headerHeight } from "./components/Header/styles";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div<{
  hasScroll?: boolean
}>`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100vh - ${headerHeight}px);
  overflow-y: ${({ hasScroll }) => hasScroll ? 'scroll' : 'hidden'};
`