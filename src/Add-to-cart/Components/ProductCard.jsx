import React, { useContext } from "react";
import { useDispatch } from "react-redux";
const ProductCard = ({ proData }) => {
  const dispatch = useDispatch();

  const cartItemadd = (id) => {
    console.log("id", id);
    dispatch({ type: "ADD_TO_CART", payload: id });
  };
  return (
    <>
      <div class="product">
        <img
          src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <h5 class="pt-4 pb-1 text-center">
        <strong>{proData.title}</strong>
      </h5>
      <div class=""><b>Color:</b> {proData.color}</div>
      <div class=""><b>Size:</b> {proData.size}</div>
      <div class="price">$ {proData.price}</div>
      <button class="btn btn-primary" onClick={() => cartItemadd(proData.id)}>
        Add to Cart
      </button>
    </>
  );
};

export default ProductCard;
