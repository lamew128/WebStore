import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';

function Payment() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className="payment_container">

        <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>

        {/* address */}
        <div className="payment_section">

          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 abc drive</p>
              <p>Toronto, ON</p>
            </div>

        </div>

        {/* items */}
        <div className="payment_section">

          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment_items">
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

        {/* payment method */}
        <div className="payment_section">

          <div className="payment_title">
            <h3>Payment method</h3>
          </div>

          <div className="payment_details">
            { /* stripe */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Payment;