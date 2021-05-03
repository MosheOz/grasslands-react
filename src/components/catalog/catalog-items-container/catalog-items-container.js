import React from "react";
import CatalogItems from "../catalog-items/catalog-items";

function CatalogItemsContainer() {
  return (
    <div>
      <h3 className="ml-24 h3">Produce</h3>
      <CatalogItems key={1} collectionId={2} take={4} skip={0} />
      <h3 className="ml-24 h3">Dairy & Eggs</h3>
      <CatalogItems key={2} collectionId={8} take={4} skip={0} />
      <h3 className="ml-24 h3">Vegetables</h3>
      <CatalogItems key={3} collectionId={5} take={4} skip={0} />
    </div>
  );
}

export default CatalogItemsContainer;
