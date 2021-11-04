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
import PageNotFound from './components/PageNotFound/PageNotFound';
import ContactUs from './components/ContactUs/ContactUs';

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
            <Route exact path="/home">
             <Home></Home>
            </Route>
            <PrivateRoute exact path="/review">
            <OrderReview></OrderReview>
            </PrivateRoute>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
