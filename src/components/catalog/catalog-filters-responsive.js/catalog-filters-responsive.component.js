import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context";
import { useQuery } from "@apollo/client";

import FilterTag from "../../common/filter-tag/filter-tag.component";
import {
  GET_COLLECTIONS,
  GET_ITEMS_WITH_FILTERS,
} from "../../../queries/queries";
import Checkbox from "../../common/checkbox/checkbox";
import { ReactComponent as RemoveIcon } from "../../../assets/cross.svg";

import "./catalog-filters-responsive.component.css";

const _ = require("lodash");

const GET_ITEMS = GET_ITEMS_WITH_FILTERS;

const CatalogFiltersResponsive = ({ toggleDrawer, onSubmitForm }) => {
  const { searchState } = useContext(FilterContext);

  const { facetValueIds, collectionId, term } = searchState;

  const [facetValues, setFacetValues] = useState(facetValueIds);
  const [filterCollections, setfilterCollections] = useState(collectionId);
  const [filterByTerm, setfilterByTerm] = useState(term);
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      term,
      facetValueIds: [],
      collectionId: filterCollections ? filterCollections["id"] : null,
    },
  });

  if (loading) return <div style={{ height: "100vh" }}>loading.."</div>;
  if (error) return `Error! ${error.message}`;

  const subFilters = _.groupBy(
    data.search.facetValues,
    "facetValue.facet.name"
  );

  const updateFacetsValues = (fv) => {
    setIsFilterChanged(true);
    const { __typename } = fv;

    if (__typename === "FacetValue") {
      const newFacetsValues = [...facetValues, fv];
      setFacetValues(newFacetsValues);
    } else if (__typename === "Collection") {
      setfilterCollections(fv);
      setFacetValues([]);
    }
  };

  const removeFacetsValues = (fv) => {
    setIsFilterChanged(true);
    const { __typename } = fv;

    if (__typename === "FacetValue") {
      const facetValueId = fv.id;
      const newFacetsValues = facetValues.filter((fv) => {
        return fv.id !== facetValueId;
      });
      setFacetValues(newFacetsValues);
    } else if (__typename === "Collection") {
      setfilterCollections(null);
      setFacetValues([]);
    } else if (__typename === "search") {
      setfilterByTerm("");
      setfilterCollections(null);
      setFacetValues([]);
    }
  };

  const subFiltersNames = Object.keys(subFilters);

  const onSubmit = (e) => {
    console.log(e);
    const filtersChanged = isFilterChanged
      ? {
          term: filterByTerm,
          facetValueIds: facetValues,
          collectionId: filterCollections,
        }
      : isFilterChanged;
    console.log("filtersChanged ", filtersChanged);
    onSubmitForm(filtersChanged);
    toggleDrawer("bottom", false).call(this);
  };

  const closeOnSubmit = () => {
    toggleDrawer("bottom", true);
  };

  const onClearFilters = () => {
    setIsFilterChanged(true);
    setfilterByTerm("");
    setfilterCollections(null);
    setFacetValues([]);
  };

  return (
    <div className="CFR">
      <CatalogFiltersResponsiveActions
        toggleDrawer={toggleDrawer}
        onClearFilters={onClearFilters}
      />

      <CatalogTagFiltersResponsive
        facetValues={facetValues}
        filterCollections={filterCollections}
        filterByTerm={filterByTerm}
        removeFacetsValues={removeFacetsValues}
      />
      <CatalogFiltersResponsiveCollections
        collectionId={filterCollections ? filterCollections["id"] : null}
        updateFacetsValues={updateFacetsValues}
        removeFacetsValues={removeFacetsValues}
      />
      <CatalogSubFiltersResponsiveCollections
        subFilters={subFilters}
        subFiltersNames={subFiltersNames}
        facetValues={facetValues}
        updateFacetsValues={updateFacetsValues}
        removeFacetsValues={removeFacetsValues}
      />
      <button className="CFR__submit--button" onClick={onSubmit}>
        Apply filters
      </button>
    </div>
  );
};

const CatalogFiltersResponsiveActions = ({ toggleDrawer, onClearFilters }) => {
  return (
    <div className="h5-medium CFR__title">
      <div className="CFR__title__left">
        <span>Filters</span>
        <span className="CFR__title__clear-all" onClick={onClearFilters}>
          <RemoveIcon fill="#80bb34" />
          Clear All
        </span>
      </div>
      <RemoveIcon
        className="CFR__title__right"
        onClick={toggleDrawer("bottom", false)}
      />
    </div>
  );
};

const CatalogFiltersResponsiveCollections = ({
  collectionId,
  updateFacetsValues,
  removeFacetsValues,
}) => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);
  console.log("data ", data);
  console.log("data ", collectionId);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="catalog-filters__spotlight">
      <div className="h6-medium">Category</div>
      <div className="catalog-filters__spotlight__checkboxes">
        {data.collections.items.map((col) => {
          const { name, id } = col;
          let isChecked = false;
          if (collectionId && id === collectionId) {
            isChecked = true;
          }

          return (
            <Checkbox
              updateFacetsValues={updateFacetsValues}
              removeFacetsValues={removeFacetsValues}
              value={name}
              isChecked={isChecked}
              facetValue={col}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

const CatalogSubFiltersResponsiveCollections = ({
  subFilters,
  subFiltersNames,
  facetValues,
  updateFacetsValues,
  removeFacetsValues,
}) => {
  return (
    <React.Fragment>
      {subFiltersNames.map((facet, i) => (
        <div className="catalog-filters__spotlight" key={i}>
          <div className="h6-medium">{facet}</div>
          <div className="catalog-filters__spotlight__checkboxes">
            {subFilters[facet].map((fv) => {
              let isChecked = false;
              if (
                facetValues &&
                facetValues.length &&
                facetValues.some((x) => x.id === fv.facetValue.id)
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
    </React.Fragment>
  );
};

const CatalogTagFiltersResponsive = ({
  filterCollections,
  facetValues,
  filterByTerm,
  removeFacetsValues,
}) => {
  let combinedValues = [...facetValues];
  if (filterCollections) {
    combinedValues = [filterCollections, ...facetValues];
  }

  if (filterByTerm) {
    combinedValues = [filterByTerm, ...combinedValues];
  }
  console.log("combinedValues ", combinedValues);

  const remove = (tn, id) => {
    const fv = { __typename: tn, id };
    removeFacetsValues(fv);
  };
  return (
    <React.Fragment>
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
              removeFacetsValues={remove}
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
  );
};

export default CatalogFiltersResponsive;
