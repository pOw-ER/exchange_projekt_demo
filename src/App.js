import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Crypto from './Components/Crypto';
import Forex from './Components/Forex';
import Dashboard from './Components/Dashboard';
import Stock from './Components/Stock';
import News from './Components/News';

function App() {
  // let toggleMenu = () => {

  // }
  return (
    <div className="App">
      {/* <i class="fas fa-times"></i> */}
      <i className="fas fa-bars"></i>
      <header>
        <nav>
          <div id="logo"><img src="/img/7.png" alt="" /></div>
          <div>
            <ul>
              <li><img src="/img/dashboard_w.png" alt="dashboard-icon" /><Link to="/">Dashboard</Link></li>
              <li><img src="/img/stocksc.png" alt="stock-icon" /><Link to="/stock">Stock</Link></li>
              <li><img src="/img/forexx.png" alt="forex-icon" /><Link to="/forex">Forex</Link></li>
              <li><img src="/img/cryptos.png" alt="crypto-icon" /><Link to="/crypto">Crypto</Link></li>
              <li><img src="/img/newsss.png" alt="news-icon" /><Link to="/news">News</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/stock">
          <Stock />
        </Route>
        <Route path="/forex">
          <Forex />
        </Route>
        <Route path="/crypto">
          <Crypto />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
