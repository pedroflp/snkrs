import { gql } from "@apollo/client"
import apollo from "../apollo"

export const GetProducts = () => {
  return apollo.query({
    query: gql`
    {
      products(first: 1) {
        edges {
          node {
            id
            name
            category {
              id
              name
            }
            defaultVariant {
              id
              pricing {
                price {
                  currency
                  gross {
                    amount
                  }
                }
              }
            }
            media {
              id
              url
              sortOrder
            }
          }
        }
      }
    }
    `
  })
}