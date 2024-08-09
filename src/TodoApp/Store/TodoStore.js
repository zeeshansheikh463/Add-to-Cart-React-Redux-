import { createStore } from "redux";

const INITIAL_VALUE = {
  itemsList: [],
};

// const INITIAL_VALUE = [];

const itemsListReducer = (state = INITIAL_VALUE, action) => {
  let newItem = state;
  if (action.type === "ADD_ITEM") {
    newItem = { itemsList: [...state.itemsList, action.payload] };
    return newItem;
  } else if (action.type === "DELETE_ITEM") {
    newItem = {
      itemsList: state.itemsList.filter((val) => {
        return val !== action.payload;
      }),
    };
  }
  return newItem;
};

export const itemsListStore = createStore(itemsListReducer);
