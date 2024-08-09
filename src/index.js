import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { itemsListStore } from "./TodoApp/Store/TodoStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsListing from "./Add-to-cart/Pages/ProductsListing";
import ShopingCartPage from "./Add-to-cart/Pages/ShopingCartPage";
import Home from "./Add-to-cart/Pages/Home";
import CreateForm from "./Add-to-cart/Pages/CreateForm";
import { productsContext } from "./Add-to-cart/Store/ProductsStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-listings",
        element: <ProductsListing />,
      },

      {
        path: "/new-product",
        element: <CreateForm />,
      },

      {
        path: "/shoping-cart",
        element: <ShopingCartPage />,
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  //   <Provider store = {itemsListStore}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>

  <React.StrictMode>
    <Provider store={productsContext}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
