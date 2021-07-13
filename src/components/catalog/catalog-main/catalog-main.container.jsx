import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";

import CatalogMain from "./catalog-main";

import { GET_ITEMS_WITH_FILTERS } from "../../../queries/queries";
import { FilterContext } from "../../../context";
import CatalogFilters from "../catalog-filters/catalog-filters";
import { Drawer } from "@material-ui/core";
import "./catalog-main.css";
const _ = require("lodash");

const GET_ITEMS = GET_ITEMS_WITH_FILTERS;

const CollectionsOverviewContainer = () => {
  const { searchState } = useContext(FilterContext);

  const { term, facetValueIds, collectionId } = searchState;

  const factValuesIds = facetValueIds.map((fv) => fv.id);
  const collectionIds = collectionId ? collectionId["id"] : null;

  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawer = (
    <Drawer
      anchor="bottom"
      open={state["bottom"]}
      onClose={toggleDrawer("bottom", false)}
      onOpen={toggleDrawer("bottom", true)}
    >
      <CatalogFilters isResponsive={true} toggleDrawer={toggleDrawer} />
    </Drawer>
  );
  const loader = <div class="loader"></div>;

  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      term,
      facetValueIds: factValuesIds,
      collectionId: collectionIds,
    },
  });

  // if (loading)
  //   return (
  //     <span className="">
  //       {window.innerWidth < 900 ? loader : "loading"}
  //     </span>
  //   );
  if (loading) return <span>{searchState.isInit}</span>;
  if (error) return `Error! ${error.message}`;

  const filters = _.groupBy(data.search.facetValues, "facetValue.facet.name");

  const items = data.search.items;

  return (
    <CatalogMain
      filters={filters}
      items={items}
      toggleDrawer={toggleDrawer}
      state={state}
      setState={setState}
    />
  );
};

export default CollectionsOverviewContainer;
