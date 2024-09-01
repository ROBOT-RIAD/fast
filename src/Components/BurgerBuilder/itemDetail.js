import React from 'react'
import burger from '../../assets/image/burger-removebg-preview.png';
const ItemDetail = () => {
  return (
    <div>
      <section className="section mt-4" style={{ backgroundColor: "rgb(234, 234, 234,0.4)" }}>
        <div className="container h-100" >
          <div className="row h-100 d-flex align-items-center justify-content-center text-center">
            <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
              <h1 className='matemasie-regular'>Fast Food, Better Taste: Why Our Food Stands Out</h1>
              <p>At our restaurant, we believe that fast food doesn’t have to compromise on quality. Our dishes are crafted with fresh, high-quality ingredients that deliver bold flavors and a satisfying experience in every bite. We focus on sourcing responsibly, ensuring that every meal is as good for your taste buds as it is for your peace of mind.</p>
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
      </section>
    </div>
  )
}

export default ItemDetail