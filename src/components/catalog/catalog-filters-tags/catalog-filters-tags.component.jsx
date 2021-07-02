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
    const combinedValues = [...facetValueIds, collectionId, term];

    return combinedValues.length ? (
      <div className="catalog-filters-tags">
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
    ) : (
      ""
    );
  }

  return "";
};

export default CatalogFiltersTags;
