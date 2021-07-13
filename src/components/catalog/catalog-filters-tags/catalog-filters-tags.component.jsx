import React, { useContext } from "react";

import { FilterContext } from "../../../context";
import FilterTag from "../../common/filter-tag/filter-tag.component";

import "./catalog-filters-tags.component.css";

const CatalogFiltersTags = () => {
  const { searchState, setSearchState } = useContext(FilterContext);

  const { facetValueIds, collectionId, term } = searchState;

  const removeFacetsValues = (typename, id) => {
    if (typename === "FacetValue") {
      const facetValueId = id;
      setSearchState({
        ...searchState,
        facetValueIds: facetValueIds.filter((fv) => {
          return fv.id !== facetValueId;
        }),
      });
    } else if (typename === "Collection") {
      setSearchState({
        ...searchState,
        facetValueIds: [],
        collectionId: null,
      });
    } else if (typename === "search") {
      setSearchState({
        isInit: true,
        facetFaluesPerCollectionInit: true,
        facetValuesDefaultFilters: [],
        facetFaluesDefaultPerCollection: [],
        facetValueIdsPerCollection: [],
        facetValueIds: [],
        collectionId: null,
        term: "",
      });
    }
  };

  if (facetValueIds.length || collectionId !== null || term !== "") {
    const combinedValues = [term, collectionId, ...facetValueIds];

    return combinedValues.length ? (
      <React.Fragment>
        <div className="catalog-filters-tags">
          <span className="h6-medium">Filtering by:</span>
          {combinedValues.map((fv, i) => {
            let name, typeName, id;
            if (typeof fv === "object" && fv !== null) {
              name = fv.name;
              typeName = fv.__typename;
              id = fv.id;
            } else {
              name = fv;
              typeName = "search";
            }

            return (
              <FilterTag
                removeFacetsValues={removeFacetsValues}
                value={name}
                typeName={typeName}
                id={id}
                key={i}
              />
            );
          })}
        </div>
        <div className="catalog-filters-tags--responsive-line"></div>
      </React.Fragment>
    ) : (
      ""
    );
  }

  return "";
};

export default CatalogFiltersTags;
