import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const AddAmount = () => {
  const [amount, setAmount] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fast-food-nzvp.onrender.com/account/add_money/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ balance: amount }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage(data.status);
        setShowModal(true);
      } else {
        setStatusMessage('Failed to update balance');
        setShowModal(true);
      }
    } catch (error) {
      setStatusMessage('An error occurred');
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  const handleOkClick = () => {
    setShowModal(false);
    navigate('/home'); 
  };

  return (
    <div className="mt-5 d-flex justify-content-center p-5" style={{ height: '100vh' }}>
      <form
        style={{ border: 'solid #ff2b85', height: '200px', borderRadius: '10px' }}
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="number"
          value={amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
          className="form-control mb-3"
          style={{ maxWidth: '300px', marginTop: '50px', marginLeft: '50px', marginRight: '50px' }}
          required
        />
        <button type="submit" style={{ backgroundColor: '#ff2b85', color: 'white' }} className="btn">
          Add Amount
        </button>
      </form>
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div style={{backgroundColor:"#ff2b85",color:"white"}} className="modal-header">
                <h5  className="modal-title">Status</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>{statusMessage} check Email</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button type="button" style={{backgroundColor:"#ff2b85",color:"white"}} className="btn" onClick={handleOkClick}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAmount;
