import React, { useContext } from "react";
import ProductsListing from "./ProductsListing";
import ErrorPage from "./ErrorPage";

import { useSelector } from "react-redux";
const Home = () => {
  const productList = useSelector((store) => store.productList);
  return (
    <>
      <div className="mt-5">
        {productList.length > 0 ? (
          <ProductsListing action="true" />
        ) : (
          <ErrorPage
            heading="Products List is Empty !"
            des="Please add some products in the Product list"
            active="true"
          />
        )}
      </div>
    </>
  );
};

export default Home;
