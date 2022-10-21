import moment from 'moment/moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../components/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import './OrderedItems.css';

function OrderedItem({ order }) {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='orderedItems'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
      <p className="orderedItems_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat 
        renderText={(value) => (
          <>
            <h3 className='orderItems_total'>Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      
    </div>
  )
}

export default OrderedItem;