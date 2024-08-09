import React, { useContext, useState } from "react";
import CartItem from "../Components/CartItem";
import { productsContext } from "../Store/ProductsStore";
import ErrorPage from "./ErrorPage";
import { useSelector } from "react-redux";

const ShopingCartPage = () => {
  const cartItems = useSelector((store) => store.cartItems);

  const totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      (accumulator += parseInt(currentValue.price)),
    0
  );

  return (
    <>
      {cartItems.length > 0 ? (
        <section class="h-100 gradient-custom">
          <div class="container py-5">
            <div class="row d-flex justify-content-center my-4">
              <div class="col-md-8">
                <div class="card mb-4">
                  <div class="card-header py-3">
                    <h5 class="mb-0">Cart - {cartItems.length} items</h5>
                  </div>
                  <div class="card-body">
                    <CartItem />

                    <hr class="my-4" />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-header py-3">
                    <h5 class="mb-0">Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        {cartItems.length} Products
                        <span>$ 200 </span>
                      </li>
                      {/* <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li> */}
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p class="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$ {totalPrice}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ErrorPage
          heading="No Items in the Cart List!"
          des="Please do some Shoping"
          active="false"
        />
      )}
    </>
  );
};

export default ShopingCartPage;
