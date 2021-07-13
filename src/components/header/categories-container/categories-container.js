import React, { useState } from "react";
import { GET_COLLECTIONS } from "../../../queries/queries";
import { useQuery } from "@apollo/client";

import { ReactComponent as ArrowIcon } from "../../../assets/upArrow.svg";
import "./categories-container.css";

const imagesObject = {
  "Fruits&Vegetables": "FV.jpg",
  Fruits: "Fruits.jpg",
  Vegetables: "Vegetables.jpg",
  Seafood: "Seafood.jpg",
  Meats: "Meats.jpg",
  Poultry: "Poultry.jpg",
  Bakery: "Bakery.jpg",
  Cheeses: "Cheeses.jpg",
  kitchenutensils: "ku.jpg",
  Moshe: "Moshe.jpg",
};

const CategoriesContainer = ({ isOpen, setIsOpen, updateFilters }) => {
  const onItemClick = (e) => {
    updateFilters(e);
  };
  const { loading, error, data } = useQuery(GET_COLLECTIONS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <React.Fragment>
      {isOpen ? (
        <div className={"CC"}>
          <div className="CC__title">
            <span className="h5-medium">Categories</span>
            <ArrowIcon
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <div className="CC__body">
            {data.collections.items.map((col) => {
              const image = col.featuredAsset?.preview
                ? col.featuredAsset?.preview
                : "";

              return (
                <div
                  className="CC__body-item"
                  key={col.id}
                  onClick={() => {
                    onItemClick(col);
                  }}
                >
                  <div className="CC__item-img-container">
                    <img src={image}></img>
                  </div>
                  <span className="h6-regular CC__body-item-text">
                    {col.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default CategoriesContainer;
