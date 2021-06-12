import { gql } from "@apollo/client";

const GET_ITEMS = gql`
  query ($collectionId: ID!, $take: Int!, $skip: Int!) {
    search(input: { collectionId: $collectionId, take: $take, skip: $skip }) {
      items {
        productName
        productId
        slug
        currencyCode
        facetIds
        facetValueIds
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
      merchant {
        name
      }
      featuredAsset {
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

const GET_FILTERS_PARAMS = gql`
  query {
    search(input: { take: 1000, skip: 0 }) {
      totalItems

      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
            __typename
          }
          __typename
        }
        __typename
      }
    }
  }
`;

const GET_FILTERS_PARAMS_QUERY = gql`
    query{
      products{
        items{
          facetValues{
            id
            name
              facet{
                id
                name
              }
          }
          collections{
            id
            name
          }   
        }
      }
    }
`;



export { GET_ITEMS, GET_COLLECTIONS, GET_PRODUCT, GET_FILTERS_PARAMS, GET_FILTERS_PARAMS_QUERY };
