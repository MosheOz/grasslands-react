import React from "react";
import { useHistory } from "react-router-dom";
import CatalogItems from "../catalog-items/catalog-items";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../../../queries/queries";


function CatalogItemsContainer() {

  let history = useHistory();
  
  const showItem = (x) => {
    history.push("/item", { item: x });
  }
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;



  return (
    <div>
      {data.collections.items.map((collection) => {
        return <div>
          <h3 className="ml-24 h3">{collection.name}</h3>
          <CatalogItems key={collection.name} collectionId={collection.id} take={4} skip={0} showItem={showItem} />
        </div>
      })}
    </div>
  );
}

export default CatalogItemsContainer;
