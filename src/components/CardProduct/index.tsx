import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { Container, Content, Preview, ProductImage, ProductInfo, ProductLabel, ProductName, ProductPrice } from './styles';
import { CardProductProps } from './types';

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const {
    id,
    media,
    category: { name: categoryName },
    name,
    defaultVariant: { pricing: { price } },
  } = product;
  
  return (
    <Container href={`/product/${id}`}>
      <Preview>
        <ProductImage
          src={media[0].url}
          alt="Product Thumbnail"
        />
      </Preview>

      <Content>
        <ProductInfo>
          <ProductLabel title={categoryName}>
            {categoryName}
          </ProductLabel>
          <ProductName title={name}>
            {name}
          </ProductName>
        </ProductInfo>

        <ProductPrice>
          {formatCurrency(price.gross.amount, price.currency)}
        </ProductPrice>
      </Content>
    </Container>
  )
}

export default CardProduct;