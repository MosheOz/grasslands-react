import React from "react";
import "./CNItemCard.css";
import BrandLogo from './brand.png';
import BasketIcon from "../svg/basket/basket";

function CNItemCard(props) {
  const { title, img, description, weight, price, showItem } = props;

  return (
    <>
 <div className="cn-main-item-card" onClick={showItem}>
        


            <div className="item-card__img-section">
                <img
                className="item-card__img-section--img"
                src={img}
                alt="'test'"
                ></img>
            </div>

            <div className="details">

                <div class="d-flex">
                    <img className={'CN-brand-logo'} src={BrandLogo} />
                    <span className={'CN-brand-title'}>Kim & Jake’s Fruits</span>
                </div>

                <div>
                    <span className="CN-item-name"></span> Pomegranate
                </div>
               
                <div>
                    <span className="CN-item-size">per 1 lb</span> 
                </div>

                <div className={'CN-item-amount-view'}>
                    <span className="CN-item-amount">$2.99</span> 
                </div>

            </div>


    </div> 
    
    {/* <div className="main_item_card" onClick={showItem}>
      
      <div className="item-card row">
        <div className="item-card__container">
          <div className="item-card__img-section">
            <img
              className="item-card__img-section--img"
              src={img}
              alt="'test'"
            ></img>
          </div>
          <div className="item-card__details-section">
            <span className="item-card__details-section__title">{title}</span>
            <span className="item-card__details-section__description">
              {description}
            </span>
            <span className="item-card__details-section__weight">{weight}</span>
            <span className="item-card__details-section__price">
              &#36;{price}
            </span>
            <button className="green add-button h5-medium">
              <i>
                <BasketIcon />
              </i>
              Add
            </button>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default CNItemCard;
