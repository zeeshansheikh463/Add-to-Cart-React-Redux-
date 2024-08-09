import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsListing = (props) => {
  const productList = useSelector((store) => store.productList);
  return (
    <>
      {productList.length > 0 ? (
        <div class="container bg-white">
          {props.action !== "true" ? (
            <div class="row mb-3">
              <div class="col-md-12 d-flex justify-content-end">
                <Link to="/new-product" class="btn btn-dark">
                  Add New Products
                </Link>
              </div>
            </div>
          ) : null}

          <nav class="navbar navbar-expand-md navbar-light bg-white">
            <div class="container-fluid p-0">
              <a class="navbar-brand text-uppercase fw-800" href="#">
                <span class="border-red pe-2">New</span>Product
              </a>
              <div class="">
                <div class="navbar-nav ms-auto d-flex">
                  <a class="nav-link">Men's</a>
                  <a class="nav-link">Women's</a>
                  <a class="nav-link">Childern</a>
                </div>
              </div>
            </div>
          </nav>
          <div class="row">
            {productList.map((val) => {
              return (
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                  <ProductCard proData={val} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <ErrorPage
          heading="Products List is Empty !"
          des="Please add some products in the Product list"
        />
      )}
    </>
  );
};

export default ProductsListing;
