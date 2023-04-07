import './App.css';

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'
import Login from './screens/Login.js';
import SignUp from './screens/SignUp.js';
import MyCart from './components/myCart';
import MyOrders from './components/Orders';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/createuser" element={<SignUp />}/>
          <Route exact path="/myCart" element={<MyCart />}/>
          <Route exact path="/myOrder" element={<MyOrders />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
