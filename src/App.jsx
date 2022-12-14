import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const PK = process.env.REACT_APP_PK;
const promise = loadStripe(PK);

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("USER IS >>>>> ", authUser);

      if (authUser) {
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <Router>
      <div className="app">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <TopBar />
            <Checkout />
          </Route>

          <Route path="/payment">
            {basket?.length > 0 ? 
              (
                <>
                  <TopBar />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              ) : (
                <Redirect to="/" />
              )
            }
          </Route>

          <Route path="/orders">
            <TopBar />
            <Orders />
          </Route>

          <Route path="/">
            <TopBar />
            <Home />
          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
