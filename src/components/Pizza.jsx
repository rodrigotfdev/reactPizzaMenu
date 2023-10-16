import React from 'react'
import Menu from './Menu'

export default function Pizza({pizzaObj}) {
  return (
    <li className='pizza'>
        <img src={pizzaObj.photoName} alt="" />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.price}</span>
        </div>
    </li>
  )
}
