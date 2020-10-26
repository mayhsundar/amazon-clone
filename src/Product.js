import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, img, price, ratings }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        ratings: ratings,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__ratings">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
