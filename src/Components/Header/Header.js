import React,{ useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import brand from '../../assets/image/icon.png';
import axios from 'axios';

const mapStateToProps = state =>{
  return {
    token: state.token,
  }
}


const Header = props => {

  const [balance, setBalance] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (props.token) {
        try {
          const response = await axios.get('https://fast-food-nzvp.onrender.com/account/balance/', {
            headers: {
              Authorization: `Bearer ${props.token}`, // Use token from Redux
            },
          });
          setBalance(response.data.balance);
        } catch (err) {
          // setError(err.message);
        } finally {
          // setLoading(false);
        }
      }
    };

    fetchBalance();
  }, [props.token]);


  let links = null;
  if(props.token === null)
  {
    links = (
    <Nav className='mr-md-5' style={{ gap: "20px" }}> 
      <NavItem>
        <NavLink 
          to='/' 
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
      <NavLink 
          to='/about' 
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
        to="/contact"
        style={{ 
          color: "#ff2b85", 
          fontSize: "25px", 
          marginTop: "-25px", 
          textDecoration: "none"  
        }} 
        >
          Contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to='/login' 
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Login
        </NavLink>
      </NavItem>
    </Nav>


    )

  }
  else{

    links =(
      <Nav className='mr-md-5' style={{ gap: "20px" }}> 
      <NavItem>
        <NavLink 
          to='/'  
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to='/burger'  
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Burger
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to='/orders'  
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Order
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to='/about'  
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          about
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to='/contact'  
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
        to="/addamount"
        style={{ 
          color: "#ff2b85", 
          fontSize: "25px", 
          marginTop: "-25px", 
          textDecoration: "none"  
        }} 
        >
          add amount
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          to='/logout'  
          style={{ 
            color: "#ff2b85", 
            fontSize: "25px", 
            marginTop: "-25px", 
            textDecoration: "none"  
          }} 
        >
          Logout
        </NavLink>
      </NavItem>
    </Nav>
    )

  }

  return (
    <div >
      <Navbar style={{  height: "70px" }}>
      <NavbarBrand href='/' className='mr-auto ml-md-5 mx-4' style={{ color: "#ff2b85", fontSize: "30px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={brand} alt='Brand Logo' style={{ height: "40px", width: "40px", borderRadius: "5px" }} />
            <b className='mx-2 matemasie-regular'>FAST FOOD</b>
            {props.token !== null && <h5 className='mx-4'>Balance: {balance}</h5>}
          </div>
      </NavbarBrand>
         {links}
      </Navbar>
    </div>
  );
}

export default connect(mapStateToProps)(Header);
