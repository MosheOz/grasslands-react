import React from "react";
import "./catalog-filters.css";
import Checkbox from "../../common/checkbox/checkbox";

function CatalogFilters() {
  return (
    <div className="catalog-filters">
      <div className="h4-medium catalog-filters__title">Filters</div>

      <Checkbox value="Sale" />

      <div className="catalog-filters__spotlight">
        <div className="h6-medium">Spotlight</div>
        <div className="catalog-filters__spotlight__checkboxes">
          <Checkbox value="Seasonal" />
          <Checkbox value="Local" />
        </div>
      </div>

      <div className="catalog-filters__spotlight">
        <div className="h6-medium">Spotlight</div>
        <div className="catalog-filters__spotlight__checkboxes">
          <Checkbox value="Seasonal" />
          <Checkbox value="Local" />
        </div>
      </div>
			
      <div className="catalog-filters__spotlight">
        <div className="h6-medium">Spotlight</div>
        <div className="catalog-filters__spotlight__checkboxes">
          <Checkbox value="Seasonal" />
          <Checkbox value="Local" />
        </div>
      </div>
    </div>
  );
}

export default CatalogFilters;
