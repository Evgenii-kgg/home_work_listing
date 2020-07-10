import React from "react";
import { data } from "./data";
import PropTypes from "prop-types";

function Listing(props) {
  const itemList = props.items;

  const code = itemList.currency_code;

  //let price = code === "USD" ? "$" : code === "EUR" ? "€" : "GBP";

  const price = (code, price) => {
    switch (code) {
      case "USD":
        return "$" + price;
      case "EUR":
        return "€" + price;
      default:
        return price + " GBP";
    }
  };

  //   if(itemList.title.lengh > 50) return itemList.title.lengh + '...'
  const title = (text) =>
    text?.substring(0, 50) + (text?.length > 50 ? "..." : "");

  const level = (quantity) => {
    console.log(quantity <= 10);
    if(quantity <= 10) {
      return "low";
    }else if(quantity <= 20) {
      return "medium";
    }else if(quantity > 20) {
      return "high";
    }
  };
    

  return (
    <div className="item-list">
      {itemList.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
              <img src={item?.MainImage?.url_570xN}></img>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{title(item.title)}</p>
            <p className="item-price">
              {price(item.currency_code, item.price)}
            </p>
            <p className={`item-quantity level-${level(item?.quantity)}`}>
              {item?.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  // Listing.defaultProps = {
  //     item: []
  // }
}
export default Listing;
