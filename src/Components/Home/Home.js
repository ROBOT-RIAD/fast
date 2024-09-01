import React from 'react';
import burger from '../../assets/image/burger-removebg-preview.png';
import Galary from './galary';
import Mide from './Mide';
import Banner from './Banner';
import Location from './Location';
import Ouritem from './Ouritem';
const Home = () => {
  return (
    <div>
      <section className="section mt-4" style={{ backgroundColor: "rgb(234, 234, 234,0.4)" }}>
        <div className="container h-100" >
          <div className="row h-100 d-flex align-items-center justify-content-center text-center">
            <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
              <h1 className='matemasie-regular'>Enjoy Your Healthy<br />Delicious Food</h1>
              <p>We are a passionate team of talented designers and culinary enthusiasts dedicated to crafting the most delicious and visually appealing burgers you'll ever experience. Our mission is to combine innovative design with mouthwatering flavors, creating a burger experience that's as much a feast for the eyes as it is for the taste buds.</p>
            </div>
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <img 
                src={burger} 
                className="img-fluid animated mt-2" 
                alt="Burger" 
                style={{ 
                  width: "100%", 
                  maxWidth: "500px", 
                  animation: "bounce 2s infinite" 
                }} 
              />
            </div>
          </div>
        </div>
        <Mide/>
        <Ouritem/>
        <Banner />
        <Location/>
        <Galary/>
      </section>
    </div>
  );
};

export default Home;
