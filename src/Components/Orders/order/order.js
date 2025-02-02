import React from 'react';



const Order = (props) => {
  const ingredients = [];
  for (let [key, value] of Object.entries(props.order.ingredients)) {
    ingredients.push({ type: key, amount: value });
  }

  const ingredientSummary = ingredients.map((item) => {
    return (
      <span
        style={{
          border: '1px solid grey',
          borderRadius: '5px',
          padding: '5px',
          marginRight: '10px',
        }}
        key={item.type}
      >
        <span style={{ textTransform: 'capitalize' }}>
          {item.type} = {item.amount}
        </span>
      </span>
    );
  });
  return (
    <div
      style={{
        border: '1px solid grey',
        boxShadow: '1px 1px #888888',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '20px',
        marginTop: '40px',
        backgroundColor: "rgb(234, 234, 234,0.4)",
      }}
    >
      <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
      <hr />
      {ingredientSummary}
      <hr />
      <p>Total: {props.order.price} BDT</p>
      {props.order.payment ? (
        <button style={{backgroundColor:"#ff2b85",color:"white"}}  className='btn'>Already Paid</button>
      ) : (
        <button style={{backgroundColor:"#ff2b85",color:"white"}} className='btn'>Pay Now</button>
      )}
    </div>
  );
};

export default Order;
