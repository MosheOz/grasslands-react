import React from "react";
import { useHistory } from "react-router-dom";
import CatalogItems from "../catalog-items/catalog-items";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../../../queries/queries";
import CatalogItemsFiltered from "../catalog-items-filtered/catalog-items-filtered.component";

function CatalogItemsContainer({
  onSeeAllClicked,
  collectionId,
  facetValueIds,
  items,
}) {
  const history = useHistory();

  const showItem = (x) => {
    history.push("/item", { item: x });
  };
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const onSeeAll = (col) => {
    onSeeAllClicked(col);
  };

  return (
    <div>
      {facetValueIds.length || collectionId !== null ? (
        <CatalogItemsFiltered
          collectionId={collectionId}
          facetValueIds={facetValueIds}
          items={items}
        />
      ) : (
        data.collections.items.map((collection) => {
          return (
            <React.Fragment key={collection.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 className="ml-24 h3">{collection.name}</h3>
                <span
                  className="h6-medium"
                  style={{ color: "#80BB34", cursor: "pointer" }}
                  onClick={() => {
                    onSeeAll(collection);
                  }}
                >
                  See All
                </span>
              </div>
              <CatalogItems
                collectionId={collection.id}
                take={4}
                skip={0}
                showItem={showItem}
                key={collection.id}
              />
            </React.Fragment>
          );
        })
      )}
    </div>
  );
}

export default CatalogItemsContainer;
