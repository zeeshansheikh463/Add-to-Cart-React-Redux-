import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

const CartItem = () => {
  const cartItems = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();

  const cartItemDel = (id) => {
    dispatch({ type: "CART_ITEM_DEL", payload: id });
  };

  return (
    <>
      {cartItems?.map((val) => {
        return (
          <>
            <div class="row mb-3">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div class="">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    class="w-100"
                    alt="Blue Jeans Jacket"
                  />
                </div>
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p>
                  <strong>{val.title}</strong>
                </p>
                <p>
                  <strong>Color: </strong> blue
                </p>
                <p>
                  <strong>Size: </strong> M
                </p>
                <p>
                  <strong>Price: </strong>$ {val.price}
                </p>
                <button
                  type="button"
                  class="btn btn-primary btn-sm me-1 mb-2"
                  onClick={() => cartItemDel(val.id)}
                >
                  <i class="fa fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2">
                  <i class="fa fa-heart"></i>
                </button>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <label class="form-label">Quantity</label>
                <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                  <button class="btn btn-primary px-3 me-2">
                    <i class="fa fa-minus"></i>
                  </button>

                  <div class="form-outline">
                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      value="1"
                      type="number"
                      class="form-control"
                    />
                  </div>

                  <button class="btn btn-primary px-3 ms-2">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CartItem;
