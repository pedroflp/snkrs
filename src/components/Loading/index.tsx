import React from 'react'
import { Container, Loader, Message } from './styles'

export const Loading: React.FC<{
  message?: string,
  color?: string,
  style?: any,
}> = ({ message, color, style }) => {
  return (
    <Container style={style}>
      <Loader color={color} />
      <Message color={color}>{message ?? 'Carregando...'}</Message>
    </Container>
  )
}
