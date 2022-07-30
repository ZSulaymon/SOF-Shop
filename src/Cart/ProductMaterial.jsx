import React from 'react'

export default function ProductMaterial(props) {
  return (
    <div className="material__card">
        <div className="material__name">
            <p>{props.name}</p>
        </div>
    </div>
  )
}
