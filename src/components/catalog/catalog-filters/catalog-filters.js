import React, { useContext } from "react";

import "./catalog-filters.css";

import { FilterContext } from "../../../context";
import CatalogCollectionsFilters from "../catalog-collections-filters/catalog-collections-filters";
import CatalogSubFilters from "../catalog-sub-filters/catalog-sub-filters.component";

function CatalogFilters({ filters }) {
  const { searchState, setSearchState } = useContext(FilterContext);

  const { facetValueIds, collectionId } = searchState;

  const updateFacetsValues = (fv) => {
    console.log(fv);
    const { __typename } = fv;

    if (__typename === "FacetValue") {
      const facetValueId = fv;
      setSearchState({
        ...searchState,
        facetValueIds: [...facetValueIds, facetValueId],
      });
    } else if (__typename === "Collection") {
      setSearchState({
        ...searchState,
        facetValueIds: [],
        collectionId: fv,
        facetFaluesPerCollectionInit: true,
      });
    }
  };

  const removeFacetsValues = (fv) => {
    console.log(fv);
    const { __typename } = fv;
    console.log("__typename ", __typename === "FacetValue");

    if (__typename === "FacetValue") {
      const facetValueId = fv.id;
      setSearchState({
        ...searchState,
        facetValueIds: facetValueIds.filter((fv) => {
          return fv.id !== facetValueId;
        }),
      });
    } else if (__typename === "Collection") {
      setSearchState({
        ...searchState,
        facetValueIds: [],
        collectionId: null,
      });
    }
  };

  return (
    <div className="catalog-filters">
      <div className="h4-medium catalog-filters__title">Filters</div>
      <CatalogCollectionsFilters
        updateFacetsValues={updateFacetsValues}
        removeFacetsValues={removeFacetsValues}
        collectionId={collectionId}
      />

      <CatalogSubFilters
        updateFacetsValues={updateFacetsValues}
        removeFacetsValues={removeFacetsValues}
        filters={filters}
      />
    </div>
  );
}

export default CatalogFilters;
