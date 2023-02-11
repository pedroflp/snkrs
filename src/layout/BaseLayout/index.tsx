import React from 'react'
import { Header } from './components/Header'
import { Container, Content } from './styles'

export const BaseLayout = ({ children, hasScroll }: { children: React.ReactNode, hasScroll?: boolean }) => {
  return (
    <Container>
      <Header />
      <Content hasScroll={hasScroll}>{children}</Content>
    </Container>
  )
}
