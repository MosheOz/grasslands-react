import React, { useContext } from "react";
import { FilterContext } from "../../../context";
import Checkbox from "../../common/checkbox/checkbox";

const CatalogSubFilters = ({
  filters,
  updateFacetsValues,
  removeFacetsValues,
}) => {
  const { searchState } = useContext(FilterContext);

  const {
    collectionId,
    facetValueIds,
    facetValuesDefaultFilters,
    facetFaluesDefaultPerCollection,
  } = searchState;

  const collectionFacets = Object.keys(facetFaluesDefaultPerCollection);
  const defaultFacets = Object.keys(facetValuesDefaultFilters);

  return (
    <div>
      {collectionId
        ? collectionFacets.map((facet, i) => (
            <div className="catalog-filters__spotlight" key={i}>
              <div className="h6-medium">{facet}</div>
              <div className="catalog-filters__spotlight__checkboxes">
                {facetFaluesDefaultPerCollection[facet].map((fv) => {
                  let isChecked = false;
                  if (
                    collectionId &&
                    facetValueIds.some((x) => x.id === fv.facetValue.id)
                  ) {
                    isChecked = true;
                  }
                  const { name, id } = fv.facetValue;
                  return (
                    <Checkbox
                      updateFacetsValues={updateFacetsValues}
                      removeFacetsValues={removeFacetsValues}
                      value={name}
                      facetValue={fv.facetValue}
                      isChecked={isChecked}
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
          ))
        : defaultFacets.map((facet, i) => (
            <div className="catalog-filters__spotlight" key={i}>
              <div className="h6-medium">{facet}</div>
              <div className="catalog-filters__spotlight__checkboxes">
                {facetValuesDefaultFilters[facet].map((fv) => {
                  let isChecked = false;
                  if (
                    !collectionId &&
                    facetValueIds.some((x) => x.id === fv.facetValue.id)
                  ) {
                    isChecked = true;
                  }
                  const { name, id } = fv.facetValue;
                  return (
                    <Checkbox
                      updateFacetsValues={updateFacetsValues}
                      removeFacetsValues={removeFacetsValues}
                      value={name}
                      facetValue={fv.facetValue}
                      isChecked={isChecked}
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
          ))}
    </div>
  );
};

export default CatalogSubFilters;
