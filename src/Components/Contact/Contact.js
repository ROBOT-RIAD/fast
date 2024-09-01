import React from 'react';
import { useFormik } from 'formik';
import contact from '../../assets/chefs/Contact Us Vector Illustration Part 02.jpg';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    onSubmit: async (values) => {
      const response = await fetch('https://fast-food-nzvp.onrender.com/email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    }
  });

  return (
    <div style={{ backgroundColor: "rgb(234, 234, 234, 0.4)" }}>
      <div className="container row w-100 mx-0">
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '400px', 
            margin: 'auto', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            paddingRight: '25px', 
            height: "100vh" 
          }} 
          className="col-lg-6 mb-4 col-md-8 col-12 d-flex justify-content-center align-items-center"
        >
          <h1 className='playwrite-cu-regular' style={{ textAlign: "center" }}>Contact Us</h1>
          <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formik.values.subject}
                onChange={formik.handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit" style={{ backgroundColor: "#ff2b85", color: "white" }} className="btn mt-3">
              Send Message
            </button>
          </form>
        </div>
        <div 
          className="col-lg-6 col-md-8 mb-5 col-12 d-flex justify-content-center align-items-center" 
          style={{ paddingLeft: '25px' }} 
        >
          <img src={contact} alt='contact' style={{ width: '100%', maxWidth: '450px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
