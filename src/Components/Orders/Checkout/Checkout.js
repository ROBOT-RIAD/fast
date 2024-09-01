import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { resetIngredient } from '../../../redux/actionCreators';

const Checkout = () => {
  const [values, setValues] = useState({
    deliveryAddress: "",
    phone: "",
    paymentType: "Cash On Delivery",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients);
  const totalPrice = useSelector(state => state.totalPrice);
  const userId = useSelector(state => state.userId);
  const token = useSelector(state => state.token);  
  
  const goBack = () => {
    if (!isSubmitting) {
      navigate(-1);
    }
  };

  const inputChangerHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    setIsSubmitting(true);
    const url = "https://fast-food-nzvp.onrender.com/burger/all/";

    const ingredientsOb = {};
    for (let ingredient of ingredients) {
      ingredientsOb[ingredient.type] = ingredient.amount;
    }

    const order = {
      ingredients: ingredientsOb,
      customer: {
        deliveryAddress: values.deliveryAddress,
        phone: values.phone,
        paymenttype: values.paymentType,  
      },
      price: totalPrice,
      orderTime: new Date().toISOString(),  
      user: userId,
    };
    console.log("Order payload:", JSON.stringify(order, null, 2));

    axios.post(url, order, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    })
      .then(response => {
        console.log(response);
        dispatch(resetIngredient()); 
        setModalOpen(true);
      })
      .catch(err => {
        console.error("Error:", err.response ? err.response.data : err.message);
        setIsSubmitting(false);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate('/burger');
  };

  return (
    <div style={{ backgroundColor: "rgb(234, 234, 234,0.4)" }}>
      <h4 style={{
        border: "1px solid grey",
        boxShadow: "1px 1px #888888",
        borderRadius: "5px",
        padding: "20px",
        marginTop:"35px",
      }}>
        Payment: {totalPrice} BDT
      </h4>
      <form style={{
        border: "1px solid grey",
        boxShadow: "1px 1px #888888",
        borderRadius: "5px",
        padding: "20px",
      }}>
        <textarea
          name="deliveryAddress"
          value={values.deliveryAddress}
          className="form-control"
          placeholder="Your Address"
          onChange={inputChangerHandler}
        ></textarea>
        <br />
        <input
          name="phone"
          className="form-control"
          value={values.phone}
          placeholder="Your Phone Number"
          onChange={inputChangerHandler}
        />
        <br />
        <select
          name="paymentType"
          className="form-control"
          value={values.paymentType}
          onChange={inputChangerHandler}
        >
          <option value="Cash On Delivery">Cash On Delivery</option>
          <option value="Bkash">Bkash</option>
        </select>
        <br />
        <Button
          style={{ backgroundColor: "#ff2b85" }}
          className="mr-auto"
          onClick={submitHandler}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Place Order"}
        </Button>
        <Button color="secondary" className="mx-3" onClick={goBack} disabled={isSubmitting}>
          Cancel
        </Button>
      </form>

      <Modal isOpen={modalOpen} toggle={closeModal}>
        <ModalBody>
          <h5>Order placed successfully!</h5>
          <Button color="primary" onClick={closeModal}>
            OK
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Checkout;
