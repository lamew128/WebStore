import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>

      <div className="checkout_basket">
        <div>
          <h2 className="checkout_title">Basket</h2>
          
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_subtotal">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;