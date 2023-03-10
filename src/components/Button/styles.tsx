import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';
import { ButtonThemesEnum } from './types';

export const Container = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  justify-content: center;
  align-items: center;
  height: min-content;
  width: min-content;

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
    `
  }
`;
