import React from "react";
import Grid from "@material-ui/core/Grid";

import ItemCard from "../../common/item-card/item-card";
import "./catalog-items.css";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../../../queries/queries";

function CatalogItems(props) {
  const { collectionId, take, skip, showItem } = props;
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      collectionId: collectionId,
      take: take,
      skip: skip,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <Grid
      container
      spacing={window.innerWidth > 900 ? 2 : 1}
      justify={window.innerWidth > 900 ? "" : "center"}
    >
      {data.search.items.map((item, i) => {
        const price =
          item.priceWithTax.min || (item.priceWithTax.value / 100).toFixed(2);
        return (
          <Grid item>
            <ItemCard
              key={i}
              title={item.productName}
              img={item.productAsset.preview}
              description={item.productName}
              weight={item.productVariantPriceMeasurement}
              price={price}
              currencyCode={item.currencyCode}
              showItem={() => {
                showItem(item.productId);
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CatalogItems;
