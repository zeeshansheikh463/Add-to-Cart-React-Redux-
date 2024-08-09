import { createContext } from "react";
import { createStore } from "redux";

const INITIAL_VALUE = {
  productList: [
    {
      id: 22,
      title: "summer Shirt",
      price: 1500,
      size: "Large",
      color: "Red",
      category: "Womens",
      quantity: 0,
    },
    {
      id: 11,
      title: "Winter sweater",
      price: 5000,
      size: "Medium",
      color: "Orange",
      category: "Womens",
      quantity: 0,
    },
    {
      id: 24,
      title: "Cap",
      price: 1000,
      size: "Large",
      color: "Red",
      category: "Womens",
      quantity: 0,
    },
  ],
  cartItems: [],
};

const productsReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };

    case "ADD_TO_CART": {
      const product = state.productList.find(
        (item) => item.id === action.payload
      );
      if (product) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
      return state;
    }

    case "CART_ITEM_DEL": {
      const product = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      if (product) {
        return {
          ...state,
          cartItems: product,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export const productsContext = createStore(productsReducer);
