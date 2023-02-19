import React from 'react';
import { Container } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  theme, style, children, width, height
}) => {
  return (
    <Container
      theme={theme}
      style={style}
      width={width}
      height={height}
    >
      {children}
    </Container>
  )
}
