import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Components/Main";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home/Home";

import Contact from "./Pages/Contact/Contact";
import AccountSetting from "./Pages/Contact/AccountSetting";
import Address from "./Pages/Contact/Address";

import Product from "./Pages/Product/Product";
import ProductPage from "./Pages/Product/ProductPage";

import Error from "./Pages/404/Error";
import LogIn from "./Pages/Account/LogIn";
import Signin from "./Pages/Account/Signin";
import ShoppingCart from "./Pages/Shop/ShoppingCart";

import ProductContentData from "./Data/ProductContentData";

import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState();

  const handleAdd = (selectedId) => {
    const item = ProductContentData.find((o) => o.id === selectedId); //! We find the selected item from the productList
    // console.log(selectedId);
    // console.log(item);
    const itemEdited = products.find((o) => o.id === selectedId); //! Also we have to check the existence of the item in our itemsSelectedList

    if (itemEdited === undefined) {//! if we did not select the item before, then the value is undefined. in this case we add it as a new selected item
      setProducts((prevState) => [...prevState, { count: 1, ...item }]);
    } else {
      setProducts((prevState) =>
        prevState.map((o) => {
          if (o.id !== selectedId) return o; //! if the selectedId is not equal to map item's id we return it without any change
          return { ...o, count: o.count + 1 }; //! if the previous condition is FALSE than we have to increase the count number of the item
        })
      );
    }
  };

  //! Deleting product from card
  const handleDelete = (id) => {
    setProducts((prevState) => prevState.filter((item) => item.id !== id));
  };

  //! Changing amount of products
  const changeAmount = (id, amount) => {
    setProducts((prevState) =>
      prevState.map((product) => {
        if (id !== product.id) {
          return { ...product };
        }

        return { ...product, count: product.count + amount }; //! There are two case: #1 count+1  #2 count+(-1) Check ProductDetails Line 14
      })
    );
  };

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main currentItems={products.reduce((prev, curr) => prev + curr.count, 0)}/>}>
            <Route index element={<Home onItems={handleAdd} />} />
            <Route path="Product" element={<Product onItems={handleAdd} />} />
            <Route path="ProductPage" element={<ProductPage />} />            
            <Route path="Contact" element={<Contact />}>
              <Route path="Address" element={<Address />} />
              <Route path="AccountSetting" element={<AccountSetting />} />
              <Route index element={<AccountSetting />} />
            </Route>
            <Route path="ShoppingCart" element={<ShoppingCart favouriteList={products} onDelete={handleDelete} onChangeAmount={changeAmount} currentPrice={products.reduce((prev, curr) => prev + curr.numPrice * curr.count,0)} key={products.id}/>} />
            <Route path='ProductPage' element={<ProductPage />}/>
          </Route>
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="*" element={<Error />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
