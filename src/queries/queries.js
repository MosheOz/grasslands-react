import { gql } from "@apollo/client";

const GET_ITEMS = gql`
  query($collectionId: ID!, $take: Int!, $skip: Int!) {
    search(input: { collectionId: $collectionId, take: $take, skip: $skip }) {
      items {
        productName
        productId
        slug
        currencyCode
        priceWithTax {
          ... on PriceRange {
            min
            max
          }

          ... on SinglePrice {
            value
          }
        }
        productVariantPriceMeasurement
        description
        productAsset {
          preview
        }
      }
    }
  }
`;

export { GET_ITEMS };
