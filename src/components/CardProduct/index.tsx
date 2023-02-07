import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Bottom, Buttons, Container, Content, Header, Preview, ProductImage, ProductInfo, ProductLabel, ProductName, ProductPrice } from './styles';
import { CardProductProps } from './types';

const CardProduct: React.FC<CardProductProps> = ({
  image,
  label,
  name,
  price,
  isFavorited,
  isInBag,
}) => {
  return (
    <Container >
      <Preview>
        <ProductImage src={image} alt="Product preview" />
      </Preview>

      <Content>
        <Header>
          <ProductInfo>
            <ProductLabel title={label}>
              {label?.length >= 15 ? label.substring(0, 15) + '...' : label}
            </ProductLabel>
            <ProductName title={name}>
              {name?.length >= 25 ? name.substring(0, 25) + '...' : name}
            </ProductName>
          </ProductInfo>
        </Header>

        <Bottom>
          <ProductPrice>
            {formatCurrency(price.gross.amount, price.currency)}
          </ProductPrice>

          <Buttons>
            <Button
              theme="primary"
              style={{ width: '100%', height: '100%' }}
            >
              Comprar
            </Button>
          </Buttons>
        </Bottom>
      </Content>
    </Container>
  )
}

export default CardProduct;