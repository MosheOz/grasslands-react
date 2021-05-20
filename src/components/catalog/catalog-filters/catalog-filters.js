import React from "react";
import "./catalog-filters.css";
import Checkbox from "../../common/checkbox/checkbox";
import { useQuery } from "@apollo/client";
import { GET_FILTERS_PARAMS } from "../../../queries/queries";
const _ = require('lodash');

function CatalogFilters() {
  const { loading, error, data } = useQuery(GET_FILTERS_PARAMS);
	if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
	const filters = _.groupBy(
		data.search.facetValues,
		'facetValue.facet.name',
	);
  console.log(filters);
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
