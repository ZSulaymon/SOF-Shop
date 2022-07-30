import React from 'react'
import ProductDetails from './ProductDetails'
import ContactInfo from './ContactInfo'

export default function ProductShop({prop3, prop5, prop7, PriceProp}) {
  return (
    <div>
        <ProductDetails prop4={prop3} prop6={prop5} prop8={prop7} currentPrice={PriceProp}/>
        <ContactInfo />
    </div>
  )
}
