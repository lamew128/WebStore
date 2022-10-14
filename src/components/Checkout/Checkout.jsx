import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
  return (
    <div className='checkout'>

      <div className="checkout_basket">
        <div>
          <h2 className="checkout_title">Basket</h2>
        </div>
      </div>

      <div className="checkout_subtotal">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;