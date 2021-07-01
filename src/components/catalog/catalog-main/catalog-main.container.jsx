import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

import CatalogMain from "./catalog-main";

import { GET_ITEMS_WITH_FILTERS } from "../../../queries/queries";
import { FilterContext } from "../../../context";
const _ = require("lodash");

const GET_ITEMS = GET_ITEMS_WITH_FILTERS;

const CollectionsOverviewContainer = () => {
  const { searchState } = useContext(FilterContext);

  const { term, facetValueIds, collectionId } = searchState;

  const factValuesIds = facetValueIds.map((fv) => fv.id);
  const collectionIds = collectionId ? collectionId["id"] : null;

  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      term,
      facetValueIds: factValuesIds,
      collectionId: collectionIds,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const filters = _.groupBy(data.search.facetValues, "facetValue.facet.name");

  const items = data.search.items;

  return <CatalogMain filters={filters} items={items} />;
};

export default CollectionsOverviewContainer;
