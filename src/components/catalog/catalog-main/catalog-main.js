import React, { useContext, useEffect, useState } from "react";

import CatalogItemsContainer from "../catalog-items-container/catalog-items-container";
import CatalogFilters from "../catalog-filters/catalog-filters";
import "./catalog-main.css";
import { FilterContext } from "../../../context";
import CatalogFiltersTags from "../catalog-filters-tags/catalog-filters-tags.component";
import { ReactComponent as VectorIcon } from "../../../assets/Vector.svg";
import { Drawer, SwipeableDrawer } from "@material-ui/core";
import CatalogFiltersResponsive from "../catalog-filters-responsive.js/catalog-filters-responsive.component";

function CatalogMain({ filters, items, toggleDrawer, state, setState }) {
  const { searchState, setSearchState } = useContext(FilterContext);

  const {
    collectionId,
    facetValueIds,
    isInit,
    facetFaluesPerCollectionInit,
    term,
  } = searchState;

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

  const onSubmitForm = (filterChanges) => {
    if (filterChanges) {
      const { term, collectionId, facetValueIds } = filterChanges;
      setSearchState({
        ...searchState,
        term,
        collectionId,
        facetValueIds: facetValueIds.length ? [...facetValueIds] : [],
      });
    }
  };

  const onSeeAllClicked = (collection) => {
    setSearchState({
      ...searchState,
      facetValueIds: [],
      collectionId: collection,
      facetFaluesPerCollectionInit: true,
    });
  };

  let numberOfFiltersApplied = facetValueIds.length;

  if (term !== "") {
    numberOfFiltersApplied += 1;
  }

  if (collectionId) {
    numberOfFiltersApplied += 1;
  }

  return (
    <React.Fragment>
      <div className="catalog-main__container">
        <div className="catalog-main__filters">
          <CatalogFilters filters={filters} isResponsive={false} />
        </div>
        <div className="catalog-main__items">
          <CatalogFiltersTags />
          <CatalogItemsContainer
            collectionId={collectionId}
            facetValueIds={facetValueIds}
            items={items}
            onSeeAllClicked={onSeeAllClicked}
          />
        </div>
      </div>
      <div className="catalog-main__filters--responsive">
        <div className="catalog-main__filters--responsive-header">
          <button
            className="catalog-main__filters--responsive-header__filter-buttons"
            style={{
              background: "#80bb34",
              color: "white",
              width: 102,
              height: 32,
            }}
            onClick={toggleDrawer("bottom", true)}
          >
            <VectorIcon />
            <span style={{ width: 37, height: 16, margin: "0px 8px" }}>
              Filters
            </span>
            <span>
              {numberOfFiltersApplied > 0 ? numberOfFiltersApplied : ""}
            </span>
          </button>
          <button className="catalog-main__filters--responsive-header__filter-buttons">
            <span>Sale</span>
          </button>
          <button className="catalog-main__filters--responsive-header__filter-buttons">
            <span>Local</span>
          </button>
        </div>
        <div className="catalog-main__filters--responsive-header__separator-line"></div>
        <CatalogItemsContainer
          collectionId={collectionId}
          facetValueIds={facetValueIds}
          items={items}
          onSeeAllClicked={onSeeAllClicked}
        />
      </div>
      <Drawer
        anchor="bottom"
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        <CatalogFiltersResponsive
          toggleDrawer={toggleDrawer}
          onSubmitForm={onSubmitForm}
        />
      </Drawer>
    </React.Fragment>
  );
}

export default CatalogMain;
