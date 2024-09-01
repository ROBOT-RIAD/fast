import React from 'react';

const Mide = () => {
  return (
    <div className='row mt-3'>
      <div className='col d-flex align-items-center justify-content-center text-center'>
        <div className='mx-5'>
          <h1 className='playwrite-cu-light' style={{textAlign: 'left'}}>Why Choose Fast Food</h1>
          <p className='bg-white' style={{marginTop: '30px',border: "5px solid #ff2b85",borderRadius:"20px",textAlign:"left"}}>
           <p style={{marginLeft:"10px",marginTop:"10px"}}> At Fast Food, we believe that great taste should be fast, affordable, and accessible to everyone. Our commitment to using fresh, quality ingredients ensures that every meal we serve is packed with flavor. Whether you're craving a juicy burger, crispy wings, or a refreshing smoothie, our diverse menu has something for everyone. We pride ourselves on offering speedy service, perfect for those with busy lifestyles, without compromising on taste or quality.</p>
          </p>
        </div>
      </div>
      <div style={{marginLeft:"-30px"}} className='col'>
        <div className='mb-3 p-3 bg-white' style={{border: "4px solid #ff2b85",borderRadius:"20px"}}>
          <p><strong>Speed and Convenience:</strong> Our name says it all! We pride ourselves on serving delicious meals quickly, so you can enjoy a satisfying meal without the wait. Perfect for busy lifestyles.</p>
          <p><strong>Quality Ingredients:</strong> We use only the freshest ingredients to craft every dish. From juicy burgers to crisp salads, every bite is packed with flavor and quality you can trust.</p>
        </div>
        <div className='p-3 bg-white' style={{border: "4px solid #ff2b85",borderRadius:"20px"}}>
          <p><strong>Affordable Prices:</strong> Delicious food shouldn’t break the bank. At Fast Food, you’ll find mouth-watering options that fit your budget, making it easy to enjoy a great meal any time.</p>
          <p><strong>Friendly Atmosphere:</strong> We’re more than just a place to eat; we’re a place to gather with friends and family. Our welcoming environment and friendly staff make every visit a pleasure.</p>
        </div>
      </div>
    </div>
  );
}

export default Mide;
