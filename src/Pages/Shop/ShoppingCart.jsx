import React from "react";
import ProductShop from "./ProductShop";
import ProductInfo from "./ProductInfo";

export default function ShoppingCart({favouriteList, onDelete, onChangeAmount, currentPrice}) {
  return (
    <div className="shopping__cart">
      <ProductShop prop3={favouriteList} prop5={onDelete} prop7={onChangeAmount} PriceProp={currentPrice}/>
      <ProductInfo />
    </div>
  );
}
