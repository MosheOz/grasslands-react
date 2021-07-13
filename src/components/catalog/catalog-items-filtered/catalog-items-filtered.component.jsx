import React from "react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";

import { GET_COLLECTIONS } from "../../../queries/queries";
import ItemCard from "../../common/item-card/item-card";

const CatalogItemsFiltered = ({ collectionId, facetValueIds, items }) => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const showItem = (x) => {
    history.push("/item", { item: x });
  };

  let collectionName = "";

  if (collectionId) {
    collectionName = data.collections.items.find(
      (col) => col.id === collectionId.id
    ).name;
  }
  return (
    <React.Fragment>
      {collectionId ? <h3 className="ml-24 h3">{collectionName}</h3> : ""}
      <Grid
        container
        spacing={window.innerWidth > 900 ? 2 : 1}
        justify={window.innerWidth > 900 ? "" : "center"}
      >
        {items.map((item, i) => {
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
    </React.Fragment>
  );
};

export default CatalogItemsFiltered;
