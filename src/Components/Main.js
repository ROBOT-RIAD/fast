import React, { Component } from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import { Routes, Route, Navigate } from 'react-router-dom';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import Auth from './Auth/Auth';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import Logout from './Auth/Logout';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import About from './About/about';
import Contact from './Contact/Contact';
import AddAmount from './Addamount/Addamount';


const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    authCheck: () => dispatch(authCheck()),
  }
}

class  Main extends Component{
  componentDidMount(){
    this.props.authCheck();
  }
  render(){
    let routes = (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Auth />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  
    if (this.props.token !== null) {
      routes = (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/burger' element={<BurgerBuilder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/addamount' element={<AddAmount />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      );
    }
  
    return (
      <div>
        <Header />
        <div >
          {routes}
        </div>
        <Footer/>
      </div>
    );

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
