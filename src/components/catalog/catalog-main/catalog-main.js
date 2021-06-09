import React from "react";
import CatalogItemsContainer from "../catalog-items-container/catalog-items-container";
import CatalogFilters from "../catalog-filters/catalog-filters";
import "./catalog-main.css";

function CatalogMain() {
  return (
    <div className="catalog-main__container">
      <div className="catalog-main__filters">
        <CatalogFilters />
      </div>
      <div className="catalog-main__items">
        <CatalogItemsContainer/>
      </div>
    </div>
  );
}

export default CatalogMain;
