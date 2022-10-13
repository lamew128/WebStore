import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <TopBar />
            <h1>123</h1>
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
