import React from "react";
// import { MyContext } from "../../../context";
import { useHistory } from "react-router-dom";
import CatalogItems from "../catalog-items/catalog-items";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../../../queries/queries";
import CatalogItemsFiltered from "../catalog-items-filtered/catalog-items-filtered.component";

import "./catalog-items-container.css";

function CatalogItemsContainer({ collectionId, facetValueIds, items }) {
  const history = useHistory();

  const showItem = (x) => {
    history.push("/item", { item: x });
  };
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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
            <div key={collection.id}>
              <div class="d-flex justify-content-between CN-categoryname">
                <h3 className="ml-24 h3 cat-font-left">{collection.name}</h3>
                <span className="CN-see-all">See All</span>
                
              </div>
              <CatalogItems
                collectionId={collection.id}
                take={4}
                skip={0}
                showItem={showItem}
                key={collection.id}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default CatalogItemsContainer;
