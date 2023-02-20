import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { ButtonThemesEnum } from './types';

export const Container = styled.button`
  display: flex;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  justify-content: center;
  align-items: center;
  min-height: min-content;
  min-width: min-content;
  transition: 300ms ease;

  ${({ theme }: { theme: ButtonThemesEnum }) =>
    theme === ButtonThemesEnum.primary && css`
      background-color: ${colors.black};
      color: ${colors.white};
      font-weight: 700;
    ` ||
    theme === ButtonThemesEnum.outlined && css`
      background-color: transparent;
      border: 1px solid ${colors.grey[2]};
      color: ${colors.grey[3]}
    ` || 
    theme === ButtonThemesEnum.transparent && css`
      background-color: transparent;
      border: none;
    `
  };

  &:disabled {
    background-color: ${colors.grey[2]};
    color: ${colors.grey[3]}
  }
`;
