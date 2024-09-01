import React from 'react';
import banners from '../../assets/chefs/banner.webp';

const Banner = () => {
  return (
<div style={{ position: "relative" }}>
  <h1 className="mx-5 mt-5 suse-cu-regular">You prepare the food, we handle the rest</h1>
  <img
    src={banners}
    alt="Banner"
    style={{
      width: "100%",
      height: "450px",
      objectFit: "cover", 
      zIndex: 1,
      position: "relative",
    }}
  />
  <div
    className="mx-5"
    style={{
      borderRadius: "20px",
      width: "600px",
      marginTop: "-140px",
      backgroundColor: "white",
      zIndex: 2,
      position: "relative",
    }}
  >
    <h4 className="mx-4 suse-cu-regular">List your restaurant or shop on foodpanda</h4>
    <p className="mx-4 mt-4">
      Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
    </p>
    <p className="mx-4 mt-4">
      It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
    </p>
    <p className="mx-4 mt-4 mb-4">Interested? Let's start our partnership today!</p>
  </div>
</div>

  )
}

export default Banner