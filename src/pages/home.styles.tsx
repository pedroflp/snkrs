import styled from "styled-components"

export const ProductList = styled.div`
  display: grid;
  max-width: 70%;
  min-width: min-content;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  margin-left: auto;
  flex: 1;
  flex-wrap: wrap;
  padding: 2rem;
`