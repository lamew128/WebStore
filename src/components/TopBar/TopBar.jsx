import React from 'react';
import './TopBar.css';
import { ShoppingBasket ,Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className='topBar'>
      <Link to="/">
        <img 
          className='topBar_logo'
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className='topBar_search'>
        <input className='topBar_input' type='text'/>
        <Search className='topBar_searchIcon' />
      </div>

      <div className='topBar_nav'>
        <div className='topBar_option'>
          <span className='topBar_optionOne'>Hello Guest</span>
          <span className='topBar_optionTwo'>Sign In</span>
        </div>

        <div className='topBar_option'>
          <span className='topBar_optionOne'>Returns</span>
          <span className='topBar_optionTwo'>& Orders</span>
        </div>

        <div className='topBar_option'>
          <span className='topBar_optionOne'>Your</span>
          <span className='topBar_optionTwo'>Prime</span>
        </div>

        <Link to="/checkout">
          <div className="topBar_optionBasket">
            <ShoppingBasket />
            <span className='topBar_optionTwo topBar_count'>0</span>
          </div>
        </Link>
        
      </div>
    </div>
  )
};

export default TopBar;