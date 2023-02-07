export type CardProductProps = {
  image: string,
  label: string,
  name: string,
  price: {
    gross: { amount: number },
    currency: string
  },
  isFavorited?: boolean,
  isInBag?: boolean,
}