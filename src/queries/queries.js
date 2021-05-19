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

const GET_COLLECTIONS = gql`
query Getcollections {
  collections {
    items {
      id
      name
    }
  }
}
`;


const GET_PRODUCT = gql`
  query prduct($productId: ID!) {
    product(id: $productId) {
      slug
      id
      merchant{
        name
      }
      featuredAsset{
        type
        preview
        source
        mimeType
        fileSize
        width
      }
    }
  }
`;

export { GET_ITEMS, GET_COLLECTIONS, GET_PRODUCT };
