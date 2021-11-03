import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
             <Home></Home>
            </Route>
            <PrivateRoute path="/review">
            <OrderReview></OrderReview>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <About></About>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
