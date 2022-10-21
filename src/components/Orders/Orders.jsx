import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { collection, doc, onSnapshot, orderBy, query, startAt } from '@firebase/firestore';
import OrderedItems from '../../Ordereditems/OrderedItems';

function Orders() {

  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
      const orderRef = collection(db, "user", user?.uid, "orders");
      const orderedOrders = query(orderRef, orderBy('created', 'desc'));
      onSnapshot(orderedOrders, snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    } else {
      setOrders([]);
    }
  }, [user])

  console.log("ORDERS >>>>> ", orders);

  return (
    <div className='orders'>
      <h1>Orders history</h1>

      <div className="orders_order">
        {orders?.map((order) => (
          <OrderedItems order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders;