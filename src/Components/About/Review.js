import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://fast-food-nzvp.onrender.com/item/reviews/')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand">
        <ul className="slider-container py-4">
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{review.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Rating: {review.rating}</h6>
                  <p className="card-text">{review.body}</p>
                  <p className="card-text"><small className="text-muted">Posted on {new Date(review.created).toLocaleDateString()}</small></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="slider-nav" aria-label="Go to previous"></button>
        <button type="button" className="slider-nav slider-nav-next" aria-label="Go to next"></button>
      </div>
    </div>
  );
};

export default Review;
