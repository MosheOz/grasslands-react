import React from "react";
import "./Header.css";
import DeliveryTruckIcon from "../common/svg/delivery-truck-icon/delivery-truck-icon";
import PersonIcon from "../common/svg/person-icon/person-icon";
import BasketIcon from "../common/svg/basket/basket";

function Header() {
  return (
    <header className="header">
      <span className="header__logo">Grasslands</span>
      <input className="header__search"></input>
      <select className="header__categories-dropdown">
        <option>Categories</option>
      </select>
      <div className="header__management">
        <span className="header__language">עברית</span>
        <div className="header__delivery-address">
          <i className="header__truck-icon">
            <DeliveryTruckIcon />
          </i>
          <span className="h6-regular">Delivery Address</span>
          <i className="header__person-icon">
            <PersonIcon />
          </i>
          <i className="header__basket-icon">
            <BasketIcon />
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
