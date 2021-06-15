import React,{ useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CatalogItems from "../catalog-items/catalog-items";
import { useQuery } from "@apollo/client";

import { GET_COLLECTIONS } from "../../../queries/queries";



function CatalogItemsContainer(props) {

  const {workingFilters} = props

  let history = useHistory();
  
  const showItem = (x) => {
    history.push("/item", { item: x });
  }
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  var collection = data.collections.items

  
  
  return (
    <div>
      {
        collection.map((collection) => {
          return(
            <div>
              <h3 className="ml-24 h3">{collection.name}</h3>
              <CatalogItems key={collection.name} collectionId={collection.id} take={4} skip={0} showItem={showItem} workingFilters={workingFilters}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default CatalogItemsContainer;
