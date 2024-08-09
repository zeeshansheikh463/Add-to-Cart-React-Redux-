import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const CreateForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addTodoItems = () => {
    dispatch({ type: "ADD_ITEM", payload: inputValue });
  };
  return (
    <>
      <div className="form-div mt-5">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-5 card p-3">
              <h4 class="mb-3 text-center mb-3 ">Add Todo Items</h4>
              <div class="row g-3">
                <div class="col-md-12">
                  <label for="firstName" class="form-label">
                    Add Items
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    onChange={handleInput}
                  />
                </div>
                <button
                  class="w-100 btn btn-primary btn-lg"
                  onClick={addTodoItems}
                >
                  Add Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
