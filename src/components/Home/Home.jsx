import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        
        <img 
            className='home_image'
            src='https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg' 
            alt=""
         />

         <div className="home_row">
            <Product 
              id={1}
              title="Gundam Exia HG 1/144"
              price={100.99}
              image='https://ca.super-hobby.com/zdjecia/7/7/8/36187_rd.jpg'
              rating={5}
            />
            <Product
              id={2}
              title="Gundam Bael Metal Robot Tamashi 1/144"
              price={999.99}
              image="https://a.rimg.com.tw/s2/5/4e/64/22152614447716_386.jpg"
              rating={5}
            />
         </div>

         <div className="home_row">
            <Product
              id={3}
              title="Gundam Bael Metal Robot Tamashi 1/144"
              price={999.99}
              image="https://a.rimg.com.tw/s2/5/4e/64/22152614447716_386.jpg"
              rating={1}
            />
            <Product
              id={4}
              title="Gundam Bael Metal Robot Tamashi 1/144"
              price={999.99}
              image="https://a.rimg.com.tw/s2/5/4e/64/22152614447716_386.jpg"
              rating={3}
            />
            <Product
              id={5}
              title="Gundam Bael Metal Robot Tamashi 1/144"
              price={999.99}
              image="https://a.rimg.com.tw/s2/5/4e/64/22152614447716_386.jpg"
              rating={2}
            />
            
         </div>

         <div className="home_row">
            <Product
              id={6}
              title="Gundam Bael Metal Robot Tamashi 1/144"
              price={999.99}
              image="https://a.rimg.com.tw/s2/5/4e/64/22152614447716_386.jpg"
              rating={4}
            />
         </div>

      </div>
    </div>
  )
}

export default Home;