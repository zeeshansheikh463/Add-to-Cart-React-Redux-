import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHome from "./TodoApp/Pages/TodoHome";
import Navbar from "./Add-to-cart/Components/Navbar";
import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { productsContext } from "./Add-to-cart/Store/ProductsStore";

function App() {
  // const [cartItems, setCartItems] = useState([]);
  // const [productList, setproductList] = useState([
  //   {
  //     id: 22,
  //     title: "summer",
  //     price: 2000,
  //     size: "Large",
  //     color: "Red",
  //     category: "Womens",
  //     quantity: 0,
  //   },
  //   {
  //     id: 24,
  //     title: "winter",
  //     price: 100,
  //     size: "Large",
  //     color: "Red",
  //     category: "Mens",
  //     quantity: 0,
  //   },

  //   {
  //     id: 26,
  //     title: "spring",
  //     price: 600,
  //     size: "Large",
  //     color: "Red",
  //     category: "Childerns",
  //     quantity: 0,
  //   },
  // ]);
  // const [productsData, setProductsData] = useState({
  //   id: "",
  //   title: "",
  //   price: "",
  //   color: "",
  //   size: "",
  //   category: "",
  //   quantity: "",
  // });

  // const navigate = useNavigate();

  // const handleInputData = (event) => {
  //   const { value, name } = event.target;

  //   setProductsData({
  //     ...productsData,
  //     [name]: value,
  //     id: Math.floor(Math.random() * 100),
  //   });
  // };

  // const handleSubmit = () => {
  //   setproductList([...productList, productsData]);
  //   navigate("/product-listings");

  //   setProductsData({
  //     id: "",
  //     title: "",
  //     price: "",
  //     color: "",
  //     size: "",
  //     category: "",
  //     quantity: "",
  //   });
  // };

  // const addToCart = (id) => {
  //   const product = productList.find((item, index) => {
  //     return item.id === id;
  //   });
  //   if (product) {
  //     setCartItems([...cartItems, product]);
  //   }
  // };

  return (
    <>
      {/* <TodoHome /> */}

      <div className="main-div">
        {/* <productsContext.Provider
          value={{
            productList,
            productsData,
            cartItems,
            handleInputData,
            handleSubmit,
            addToCart,
            setCartItems,
            setproductList,
          }}
        > */}
          <Navbar />
          <Outlet></Outlet>
        {/* </productsContext.Provider> */}
      </div>
    </>
  );
}

export default App;
