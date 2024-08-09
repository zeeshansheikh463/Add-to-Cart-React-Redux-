import React, { useContext, useState } from "react";
// import { productsContext } from "../Store/ProductsStore";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
const CreateForm = () => {
  // const { productsData, handleInputData, handleSubmit } =
  //   useContext(productsContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productsData, setProductsData] = useState({
    id: "",
    title: "",
    price: "",
    color: "",
    size: "",
    category: "",
    quantity: "",
  });

  //----------------------------
  // ---- Handle Input Data ----
  // ---------------------------

  const handleInputData = (event) => {
    const { value, name } = event.target;

    setProductsData({
      ...productsData,
      [name]: value,
      id: Math.floor(Math.random() * 100),
    });
  };

  //------------------------
  // ---- Handle Submit ----
  // -----------------------

  const handleSubmit = () => {
    dispatch({ type: "ADD_ITEM", payload: productsData });
    navigate("/product-listings");

    setProductsData({
      id: "",
      title: "",
      price: "",
      color: "",
      size: "",
      category: "",
      quantity: "",
    });
  };

  return (
    <>
      <div className="form-main-div">
        <div class="container">
          <h3 class="mb-4">Products Form</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <strong class="label">Product Title</strong>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Title"
                  name="title"
                  value={productsData.title}
                  onChange={handleInputData}
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <strong>Price</strong>
                <input
                  type="text"
                  class="form-control"
                  name="price"
                  value={productsData.price}
                  placeholder="Product Price"
                  onChange={handleInputData}
                />
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-6">
              <div class="form-group">
                <strong class="label">Size</strong>

                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="size"
                  onChange={handleInputData}
                >
                  <option selected>Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <strong>color</strong>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="color"
                  onChange={handleInputData}
                >
                  <option selected>Select Color</option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Orange">Orange</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-6">
              <div class="form-group">
                <strong>Category</strong>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="category"
                  onChange={handleInputData}
                >
                  <option selected>Select Category</option>
                  <option value="Mens">Men</option>
                  <option value="Womens">Women</option>
                  <option value="Childern's">Childern</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
