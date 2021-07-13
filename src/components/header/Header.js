import React, { useContext, useState } from "react";
import "./Header.css";
import DeliveryTruckIcon from "../common/svg/delivery-truck-icon/delivery-truck-icon";
import PersonIcon from "../common/svg/person-icon/person-icon";
import BasketIcon from "../common/svg/basket/basket";
import { FilterContext } from "../../context";
import HeaderResponsive from "./header-responsive";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import CategoriesContainer from "./categories-container/categories-container";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { searchState, setSearchState } = useContext(FilterContext);

  const { term } = searchState;

  const updateFilters = (e) => {
    setSearchState({
      ...searchState,
      facetValueIds: [],
      collectionId: e,
      facetFaluesPerCollectionInit: true,
    });
  };

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

  return (
    <React.Fragment>
      <HeaderResponsive className="header-res"></HeaderResponsive>
      <header className="header">
        <span className="header__logo">Grasslands</span>
        <div className="header-left-container">
          <div className="header__search__select__container">
            <input
              className="header__search"
              onChange={onSearchBox}
              value={term}
            ></input>

            <div
              className="header__categories-dropdown"
              onClick={(e) => {
                setIsOpen(!isOpen);
              }}
            >
              <span className="h5-medium">Categories</span>
              <ArrowIcon />

              <CategoriesContainer
                className={isOpen ? "CC__show" : "CC__hide"}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                updateFilters={updateFilters}
              />
            </div>
          </div>
          <div className="header__management">
            <div className="header__delivery-address">
              <span className="header__language">עברית</span>
              <div className="HM__delivery-address">
                <i className="header__truck-icon">
                  <DeliveryTruckIcon />
                </i>
                <span className="h6-regular">Delivery Address</span>
              </div>
              <i className="header__person-icon">
                <PersonIcon />
              </i>
              <i className="header__basket-icon">
                <BasketIcon />
              </i>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
