import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51L5cctHvqZNALyBTnXNVjVMfIz0uxSKCFj7u74kK4mK6qnZ7pnyRHvPUrMvswktqcSs2306tlLiWG1Vse5HwvkZ700kcrHnt2W');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>>>> ", authUser);

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
            <TopBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
