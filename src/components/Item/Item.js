import React from "react";
import "./Item.css";
import Heart from "../common/svg/heart/heart";
import ItemCard from "../common/item-card/item-card";

function Item(props) {
  return (
    <div className="item">
      <div className="item__image-container">
        <div className="item__image-container--image">
          <img src="/images/image12.png" alt="''"></img>
        </div>
        <div className="item__image-container--image-gallery"></div>
      </div>

      <div className="item__details">
        <div className="item__details__info">
          <span className="item__details__info__supplier h7-regular">
            Kim & Jake’s Fruits
          </span>
          <span className="item__details__info__title h2">Mixed Berries</span>
          <span className="item__details__info__weight h5-regular">
            per 1 lb
          </span>
          <div className="item__details__info__actions">
            <span className="item__details__info__actions--price h4-medium">
              $8.99
            </span>
            <button className="item__details__info__actions--button green h5-medium">
              Add to Basket
            </button>
            <span className="item__details__info__actions--reaction">
              <Heart />
            </span>
          </div>
        </div>
        <div className="item__details__tags">
          <div className="item__details__tags--list">
            <span className="h5-regular d-block">Ingredients:</span>
            <span className="h5-regular">
              Strawberries, Blueberries, Raspberries, Blackberries
            </span>
          </div>
          <div className="item__details__tags--tags">
            <div className="item__details__tags--tags--tag h6-regular">
              Seasonal
            </div>
            <div className="item__details__tags--tags--tag h6-regular">
              Dairy Free
            </div>
            <div className="item__details__tags--tags--tag h6-regular">
              Paleo Friendly
            </div>
            <div className="item__details__tags--tags--tag h6-regular">
              Vegan
            </div>
            <div className="item__details__tags--tags--tag h6-regular">
              Vegetarian
            </div>
          </div>
        </div>
        <div className="item-details__look-alike">
          <h3 className="item-details__look-alike--item h3">
            You may also like
          </h3>
          <div className="item-details__look-alike--item-name">
            <ItemCard
              title={"Kim & Jake’s Fruits"}
              img={"/images/Pomegranate.png"}
              description={"Pomegranate"}
              weight={"per 1 lb"}
              price={"2.99"}
              currencyCode={"usd"}
            />
            <ItemCard
              title={"Nature’s Path Organic"}
              img={"/images/plum.png"}
              description={"Organic Black Plum"}
              weight={"per 1 lb"}
              price={"3.99"}
              currencyCode={"usd"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
