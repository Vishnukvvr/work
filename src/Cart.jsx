

import React from 'react'
import './Cart.css'

const Cart = (cart) => {
  return (
    <div className='cart'>
      <img src={cart.img} alt="img" />
      <p>{cart.name}</p>
      <p>{cart.prize}</p>
    </div>
  )
}

export default Cart