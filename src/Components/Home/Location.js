import React from 'react';
import Dhaka from '../../assets/locations/Dhaka.png';
import chitagon from '../../assets/locations/chitagone.png';
import Commilla from '../../assets/locations/commilla.png';
import noakhali from '../../assets/locations/noakhali.png';
import Bhola from '../../assets/locations/bhola.png';

const Location = () => {
  return (
    <div>
        <h1 className='mx-5 suse-cu-regular'>Find us in these cities and many more!</h1>
        <div className='d-flex flex-wrap'>
            <div className='mx-5'>
                <img src={Dhaka} alt="Dhaka" style={{ width: "300px", height: "300px",borderRadius:"10px" }} />
                <p><a href="#"style={{marginTop:"-550px" ,backgroundColor:"white"}} className='mx-3 btn'>Dhaka</a></p>
            </div>
            <div className=''>
                <img src={chitagon} alt="Dhaka" style={{ width: "300px", height: "300px",borderRadius:"10px" }} />
                <p><a href="#"style={{marginTop:"-550px" ,backgroundColor:"white"}} className='mx-3 btn'>Chitagone</a></p>
            </div>
            <div className='mx-5'>
                <img src={Commilla} alt="Dhaka" style={{ width: "300px", height: "300px",borderRadius:"10px" }} />
                <p><a href="#"style={{marginTop:"-550px" ,backgroundColor:"white"}} className='mx-3 btn'>Comilla</a></p>
            </div>
            <div className=''>
                <img src={noakhali} alt="Dhaka" style={{ width: "300px", height: "300px",borderRadius:"10px" }} />
                <p><a href="#"style={{marginTop:"-550px" ,backgroundColor:"white"}} className='mx-3 btn'>Noakhali</a></p>
            </div>
            <div className='mx-5'>
                <img src={Bhola} alt="Dhaka" style={{ width: "300px", height: "300px",borderRadius:"10px" }} />
                <p><a href="#"style={{marginTop:"-550px" ,backgroundColor:"white"}} className='mx-3 btn'>Bhola</a></p>
            </div>
        </div>
        <h3 className='mx-5 nerko-one-regular'>Order food from the best restaurants and shops with foodpanda Bangladesh</h3>
        <p className='mx-5'>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodpanda Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from foodpanda, too? Check out foodpanda shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let foodpanda Bangladesh take the pressure off your shoulders.</p>
    </div>
  )
}

export default Location