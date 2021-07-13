import { SwipeableDrawer } from "@material-ui/core";
import React, { useContext, useState } from "react";

import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { FilterContext } from "../../context";
import BasketIcon from "../common/svg/basket/basket";

import "./header-responsive.css";
import MenuDrawer from "./menu-drawer/menu-drawer.component";

const HeaderResponsive = () => {
  const { searchState, setSearchState } = useContext(FilterContext);

  const { term } = searchState;

  const onSearchBox = (e) => {
    setSearchState({
      isInit: true,
      facetFaluesPerCollectionInit: true,
      facetValuesDefaultFilters: [],
      facetFaluesDefaultPerCollection: [],
      facetValueIdsPerCollection: [],
      facetValueIds: [],
      collectionId: null,
      term: e.target.value,
    });
  };

  const [state, setState] = useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
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

  return (
    <div>
      <React.Fragment>
        <div className="header-responsive">
          <div className="header-responsive__container">
            <div className="header-responsive__menu-container">
              <MenuIcon
                onClick={toggleDrawer("left", true)}
                className="header-responsive__menu"
              ></MenuIcon>
              <span className="header__logo">Grasslands</span>
            </div>
            <div className="header-responsive__basket-container">
              <span className="h6-regular">Delivery Address</span>
              <i className="header-responsive__basket">
                <BasketIcon />
              </i>
            </div>
          </div>
          <input
            className="header-responsive__search"
            onChange={onSearchBox}
            value={term}
            placeholder="Search for product or farmer"
          ></input>
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            <MenuDrawer toggleDrawer={toggleDrawer} />
          </SwipeableDrawer>
        </div>
      </React.Fragment>
    </div>
  );
};

export default HeaderResponsive;
