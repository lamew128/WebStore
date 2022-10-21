import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { totalPrice } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

function Payment() {

  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  //whenever the basket changes
  //make an axios request to get a new stripe client secret in order charge the corrent amount
  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios({
        method: 'post',
        url: `/payments/create?total=${totalPrice(basket) * 100}`
      });

      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("SERCET >>>>> ", clientSecret);

  const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret ,{
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then(({ paymentIntent }) => {

      const orderRef = doc(db, "user", user?.uid, "orders", paymentIntent.id);

      setDoc(orderRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      });

      history.replace('/orders');
    })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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

            <form onSubmit={submit}>

              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <CurrencyFormat 
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Payment;