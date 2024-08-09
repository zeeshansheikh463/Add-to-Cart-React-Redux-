import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = (props) => {
    const {heading, des, active} = props;
  return (
    <div className="main-Error-page">
      <div className="container">
        <div class="row align-items-md-stretch">
          <div class="col-md-12">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>{heading}</h2>
              <p>
                {des}
              </p>
              
              {active ==="true" ? <Link to="/new-product" class="btn btn-outline-light" type="button"  >
               Add New Products
              </Link>: null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
