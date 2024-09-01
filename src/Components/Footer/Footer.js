import React from 'react'

const Footer = () => {
  return (
    <div >
        <footer className="bg-dark">
            <div className='container'>
                <div className="row gy-3  text-white">
                    {/* <!--address--> */}
                   <div className="col-lg-3 col-md-6 d-flex">
                       <div className="address">
                            <h4><i className="fa-solid fa-location-dot" style={{color: "#ee4e3b"}}></i>  Address</h4>
                            <p>ROBOT TOWER</p>
                            <p>Bangaldesh Dhaka 1268</p>
                        </div>
                    </div>
                    {/* info */}
                    <div className="col-lg-3 col-md-6 d-flex">
                       <div>
                       <h4><i className="fa-solid fa-address-book" style={{color: "#ee4e3b"}}></i> Contact</h4>
                       <p>
                            <strong>Phone:</strong> <span>+00801794938327</span><br/>
                            <strong>Email:</strong> <span>info@example.com</span><br/>
                       </p>
                       </div>
                    </div>
                    {/* time */}
                    <div className="col-lg-3 col-md-6 d-flex">
                       <div>
                          <h4><i className="fa-solid fa-clock" style={{color: "#ee4e3b"}}></i> Opening Hours</h4>
                          <p>
                            <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br/>
                            <strong>Sunday</strong>: <span>Closed</span>
                           </p>
                       </div>
                    </div>
                    {/* link  */}
                    <div className="col-lg-3 col-md-6">
                        <h4>Follow Us</h4>
                        <div className="social-links d-flex">
                          <i className="fa-brands fa-linkedin" style={{color: "#ee4e3b",fontSize: "24px"}}></i> 
                          <i className="fa-brands mx-4 fa-square-facebook" style={{color: "#ee4e3b",fontSize: "24px"}}></i> 
                          <i className="fa-brands mx-2 fa-square-twitter" style={{color: "#ee4e3b",fontSize: "24px"}}></i> 

                        </div>
                    </div>
                    <hr/>
                    <div className=" copyright  text-center ">
                       <p className='text-white'>© <span>Copyright</span> <strong class="px-1">FAST FOOD</strong> <span>All Rights Reserved</span></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer