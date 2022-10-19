import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
