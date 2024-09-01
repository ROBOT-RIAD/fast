import React from 'react';
import master from '../../assets/chefs/chefs-1.jpg';
import Patissier from '../../assets/chefs/chefs-2.jpg'
import Cook from '../../assets/chefs/chefs-3.jpg';
import office from '../../assets/chefs/office.webp';
import Review from './Review';
const About = () => {
  return (
    <div  style={{ backgroundColor: "rgb(234, 234, 234,0.4)",marginTop:"20px" }}>
        <div className='p-3'>
           <h1 className='playwrite-cu-regular'  style={{textAlign:"center"}}>About Our Proffesional Chefs</h1>
        </div>
        <div className='row d-flex mb-4 mt-4'>
            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
              <h4 style={{}}>Walter White</h4>
              <span>Master Chef</span>
              <p className='mx-5' style={{textAlign:"center"}}>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <div className="member-img position-relative">
                <img 
                  src={master} 
                  className="img-fluid" 
                  alt="Walter White - Master Chef" 
                  style={{ width: '450px', borderRadius: '10%' }}
                />
              </div>
          </div>
        </div>
        <div className='row d-flex mb-4 mt-4'>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <div className="member-img position-relative">
                <img 
                  src={Patissier} 
                  className="img-fluid" 
                  alt="Walter White - Master Chef" 
                  style={{ width: '450px', borderRadius: '10%' }}
                />
              </div>
          </div>
            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
              <h4 style={{}}>Sarah Jhonson</h4>
              <span>Patissier</span>
              <p className='mx-5' style={{textAlign:"center"}}>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
            </div>
        </div>
        <div className='row d-flex mb-3 mt-4'>
            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
              <h4 style={{}}>William Anderson</h4>
              <span>Cook</span>
              <p className='mx-5' style={{textAlign:"center"}}>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <div className="member-img position-relative">
                <img 
                  src={Cook} 
                  className="img-fluid" 
                  alt="Walter White - Master Chef" 
                  style={{ width: '450px', borderRadius: '10%' }}
                />
              </div>
          </div>
        </div>
        <h1 className='mx-5 suse-cu-bold'><b>Take your office out to lunch</b></h1>
        <div style={{position: "relative"}}>
        <img
          src={office}
          alt="Banner"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover", 
            zIndex: 1,
            position: "relative",
          }}
          />
          <div className='mx-5' style={{borderRadius: "20px", width: "600px", marginTop: "-140px", backgroundColor: "white", zIndex: 2, position: "relative"}}>
            <h4 className='mx-4'>foodpanda for business</h4>
            <p className='mx-4 mt-4'>Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.</p>
            <p className='mx-4 mt-4'>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p> 
            <p className='mx-4 mt-4 mb-4'>Interested? Let's start our partnership today!</p>
          </div>
        </div>
        <Review/>
    </div>
  )
}

export default About