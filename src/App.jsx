import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="app">
        <TopBar />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
