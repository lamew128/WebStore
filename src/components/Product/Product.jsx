import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';

function Product({id, title, price, image, rating}) {

  const [{ basket }, dispatch] = useStateValue();

  //console.log("In basket: ", basket);

  const addToBasket = () => {
    dispatch({ //inside{} = action
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className="product_info">

        <p>{title}</p>

        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating).fill().map((_, i) => <p>⭐</p>)} {/* print stars (rating times) */}
        </div>

      </div>

      <img 
          src={image} 
          alt=''
        />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;