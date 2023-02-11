import styled from 'styled-components';
import { colors } from '../../../../constants/colors';

export const headerHeight = 80;

export const Container = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${headerHeight}px;
  border-bottom: 1px solid ${colors.grey[1]};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: ${colors.black};
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InteractiveButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const IconButton = styled.button`
  border: 0;
  background-color: transparent;
`
