import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cartItems);
  return (
    <>
      <header>
        <div class="px-3 py-2 bg-dark text-white">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >(React Projects)</a>

              <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/" class="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/new-product" class="nav-link text-white">
                    Create Product
                  </Link>
                </li>
                <li>
                  <Link to="/product-listings" class="nav-link text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to ="/shoping-cart" class="nav-link text-white position-relative">
                    Shoping Cart
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems?.length}
                    </span>
                  </Link>
                </li>
                {/* <li>
                  <a href="#" class="nav-link text-white">
                    Customers
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="px-3 py-2 border-bottom mb-3">
          <div class="container d-flex flex-wrap justify-content-center">
            <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
              <input
                type="search"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-light text-dark me-2">
                Login
              </button>
              <button type="button" class="btn btn-primary">
                Sign-up
              </button>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Navbar;
