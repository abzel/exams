import React, { useState } from 'react'
import './Card.css'

export const Card = ({ data }) => {
    
    const [result, setResult] = useState()
     return <>
 {
    <div className="card">
        <img src={data.img}></img>
        <h1 className="name" onClick="title">{data.title}</h1>
        <p>{data.price}</p>
    </div>
 }
 </>
}