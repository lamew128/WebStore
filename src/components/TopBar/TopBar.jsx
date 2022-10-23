import React from 'react';
import './TopBar.css';
import { ShoppingBasket ,Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function TopBar() {

  const [{basket, user}, dispatch] = useStateValue();

  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='topBar'>
      <Link to="/">
        <img 
          className='topBar_logo'
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className='topBar_nav'>

        {user ? 
          <>
            <div className='topBar_option'>
              <span className='topBar_optionOne'>Signed In as</span>
              <span className='topBar_optionTwo'>{user.email}</span>
            </div>
            <div className='topBar_option' onClick={signOut}>
              <span className='topBar_optionOne'>Sign</span>
              <span className='topBar_optionTwo'>Out</span>
            </div>
          </>
          
        :
          <Link to='/login'>
            <div className='topBar_option'>
              <span className='topBar_optionOne'>Sign</span>
              <span className='topBar_optionTwo'>In</span>
            </div>
          </Link>
        }

        <Link to='/orders'>
          <div className='topBar_option'>
            <span className='topBar_optionOne'>Order</span>
            <span className='topBar_optionTwo'>History</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="topBar_optionBasket">
            <ShoppingBasket />
            <span className='topBar_optionTwo topBar_count'>
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
  )
};

export default TopBar;