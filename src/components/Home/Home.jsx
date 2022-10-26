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
              title="Gundam Exia R2 HG 1/144"
              price={100.99}
              image='https://ca.super-hobby.com/zdjecia/7/7/8/36187_rd.jpg'
              rating={5}
            />
            <Product
              id={2}
              title="Gundam Bael Metal Robot Tamashi 1/144"
              price={999.99}
              image="https://a.rimg.com.tw/s2/5/4e/64/22152614447716_386.jpg"
              rating={7}
            />
         </div>

         <div className="home_row">
            <Product
              id={3}
              title="Nintendo Switch Lite"
              price={200.55}
              image="https://m.media-amazon.com/images/I/61gndBOP9zS._AC_SX679_.jpg"
              rating={1}
            />
            <Product
              id={4}
              title="PlayStation®5 console"
              price={555.55}
              image="https://i5.walmartimages.ca/images/Enlarge/283/923/6000202283923.jpg"
              rating={3}
            />
            <Product
              id={5}
              title="GC™ 14 Marine Camera"
              price={777.77}
              image="https://res.garmin.com/en/products/010-02667-00/g/cf-lg-d7ab5f56-6212-4270-b91a-90bf8e82bb8d.jpg"
              rating={2}
            />
            
         </div>

         <div className="home_row">
            <Product
              id={6}
              title="LG UN90 75'' 4K Smart UHD TV"
              price={1111.11}
              image="https://www.lg.com/ca_en/images/tvs/md07535527/gallery/new_desk2.jpg"
              rating={4}
            />
         </div>

      </div>
    </div>
  )
}

export default Home;