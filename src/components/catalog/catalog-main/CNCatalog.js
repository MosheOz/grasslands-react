import React, { useContext, useEffect } from "react";
import CatalogItemsContainer from "../catalog-items-container/catalog-items-container";
import CatalogFilters from "../catalog-filters/catalog-filters";
import "./catalog-main.css";
import { FilterContext } from "../../../context";


const CNCatalog = ({filters, items}) => {

    const { searchState, setSearchState } = useContext(FilterContext);


    console.log('filters',filters)

  const { collectionId, facetValueIds, isInit, facetFaluesPerCollectionInit } =
    searchState;

  useEffect(() => {
    if (isInit) {
      setSearchState({
        ...searchState,
        facetValuesDefaultFilters: filters,
        isInit: false,
      });
    }
  });

  if (collectionId && facetFaluesPerCollectionInit) {
    setSearchState({
      ...searchState,
      facetFaluesDefaultPerCollection: filters,
      facetFaluesPerCollectionInit: false,
    });
  }


    return (
        <div className="row">
            <div className="fix-sm-wid-tab col-md-2">
              <div className="catalog-main__filters">
                  <CatalogFilters/>
                </div>  
            </div>
            <div className="fix-wid-tab col-md-10 cn-main-list">
                <CatalogItemsContainer
                    collectionId={collectionId}
                    facetValueIds={facetValueIds}
                    items={items}
                />
            </div>
        </div>
    )
}

export default CNCatalog
