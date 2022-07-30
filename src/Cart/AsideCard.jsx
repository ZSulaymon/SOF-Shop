import React from 'react'

export default function AsideCard(props) {
  return (
    <div className="aside__card">
        <div className="product__name">
            <p>{props.product}</p>
        </div>
        <div className="product__amount">
            <p>{props.amount}</p>
        </div>
    </div>
  )
}
