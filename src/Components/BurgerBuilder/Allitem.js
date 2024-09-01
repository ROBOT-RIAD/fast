import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoadItem = (searchQuery = '') => {
  return fetch(`https://fast-food-nzvp.onrender.com/item/all/?search=${searchQuery}`)
    .then(res => res.json());
};

const SubmitReview = (review) => {
  return fetch("https://fast-food-nzvp.onrender.com/item/reviews/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  }).then(res => res.json());
};

const Allitem = (props) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [review, setReview] = useState({ name: '', body: '', rating: '⭐⭐⭐⭐⭐' });
  const [searchQuery, setSearchQuery] = useState('');
  const val = props.val;

  useEffect(() => {
    LoadItem().then(data => setItems(data));
  }, []);

  const handleSearch = () => {
    LoadItem(searchQuery).then(data => setItems(data));
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setReview({ name: '', body: '', rating: '⭐⭐⭐⭐⭐' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const reviewData = {
      ...review,
      item: selectedItem.id,
      reviewer: 1 
    };
    SubmitReview(reviewData).then(() => {
      handleCloseModal();
    });
  };

  return (
    <div className='mx-5'>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Show Items</h1>
      <div className="mx-4">
        <div className="input-group mt-5" style={{ width: '600px' }}>
          <input
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search items..."
          />
          <button style={{ backgroundColor: "#ff2b85", color: "white" }} className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.map(item => (
          <div className="card mt-3 mb-3 mx-3" style={{ width: "18rem" }} key={item.id}>
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <p>{item.description}</p>
              <h5 className="card-title">
                <button
                  style={{ backgroundColor: "#ff2b85" }}
                  className="btn text-white"
                  onClick={() => handleOpenModal(item)}
                >
                  {item.title}
                </button>
              </h5>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal isOpen={modalOpen} toggle={handleCloseModal}>
          <ModalHeader style={{ backgroundColor: "#ff2b85", color: "white" }} toggle={handleCloseModal}>
            {selectedItem.title}
          </ModalHeader>
          <ModalBody>
            <img src={selectedItem.image} alt={selectedItem.title} style={{ width: "100%" }} />
            <p>{selectedItem.description}</p>

            {val !== 0 && (
              <>
                <h1 style={{ textAlign: "center", marginTop: "50px" }}><b>REVIEW</b></h1>
                <Form onSubmit={handleSubmitReview}>
                  <FormGroup>
                    <Label for="reviewName">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="reviewName"
                      value={review.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reviewBody">Review</Label>
                    <Input
                      type="textarea"
                      name="body"
                      id="reviewBody"
                      value={review.body}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reviewRating">Rating</Label>
                    <Input
                      type="select"
                      name="rating"
                      id="reviewRating"
                      value={review.rating}
                      onChange={handleInputChange}
                    >
                      <option>⭐</option>
                      <option>⭐⭐</option>
                      <option>⭐⭐⭐</option>
                      <option>⭐⭐⭐⭐</option>
                      <option>⭐⭐⭐⭐⭐</option>
                    </Input>
                  </FormGroup>
                  <Button style={{ backgroundColor: "#ff2b85", color: "white", textDecoration: "none" }} type="submit">
                    Submit Review
                  </Button>
                </Form>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default Allitem;
