import { colors } from '@/constants/colors';
import React from 'react';
import { Loader } from '../Loading/styles';
import { Container } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  theme, style, children, onClick, isLoading, disabled
}) => {
  return (
    <Container
      theme={theme}
      onClick={onClick}
      disabled={disabled}
      style={{ ...style, pointerEvents: isLoading ? 'none' : 'auto' }}
    >
      {isLoading ? <Loader size={24} color={colors.white} /> : children}
    </Container>
  )
}
