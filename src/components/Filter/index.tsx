import React from 'react'
import { Container, FilterInput, Input, Label } from './styles'

export const Filter = ({ onFilter }) => {
  return (
    <Container>
      <FilterInput>
        <Label>Filtrar pelo nome do produto</Label>
        <Input
          placeholder='Nome do produto'
          onChange={e => onFilter(e.target.value)}
        />
      </FilterInput>
    </Container>
  )
}
