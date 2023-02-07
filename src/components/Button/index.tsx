import React from 'react';
import { Container } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  theme, style, children
}) => {
  return (
    <Container theme={theme} style={style}>
      {children}
    </Container>
  )
}
