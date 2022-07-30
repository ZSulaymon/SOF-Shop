import React from "react";
import { useState } from "react";
import ProductContentData from "../../Data/ProductContentData";
import SingleProduct from "../../Cart/SingleProduct";

function ProductPage(props) {
  console.log(props);
  return (
    <div className="product__page">
      <SingleProduct />
    </div>
  );
}

export default ProductPage