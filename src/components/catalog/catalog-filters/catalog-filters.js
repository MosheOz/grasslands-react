import React, { useContext, useMemo } from "react";

import "./catalog-filters.css";

import { FilterContext } from "../../../context";
import CatalogCollectionsFilters from "../catalog-collections-filters/catalog-collections-filters";
import CatalogSubFilters from "../catalog-sub-filters/catalog-sub-filters.component";

import { ReactComponent as RemoveIcon } from "../../../assets/cross.svg";
import CatalogFiltersTags from "../catalog-filters-tags/catalog-filters-tags.component";

const CatalogFilters = ({ filters, isResponsive, toggleDrawer }) => {
  const { searchState, setSearchState } = useContext(FilterContext);

  const { facetValueIds, collectionId } = searchState;

  const updateFacetsValues = (fv) => {
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
    const { __typename } = fv;

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
      {isResponsive ? (
        <div>
          <div className="h5-medium catalog-filters__title">
            <span>Filters</span>
            <RemoveIcon onClick={toggleDrawer("bottom", false)} />
          </div>
          <CatalogFiltersTags />
        </div>
      ) : (
        <div className="h4-medium catalog-filters__title">Filters</div>
      )}

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
};

export default CatalogFilters;
