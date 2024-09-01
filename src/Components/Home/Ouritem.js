import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const LoadItem = (searchQuery = '') => {
  return fetch(`https://fast-food-nzvp.onrender.com/item/all/?search=${searchQuery}`)
    .then(res => res.json());
};

const Ouritem = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='mx-5'>
      <div className="mx-4">
        <div className="input-group mt-5 mb-5" style={{ width: '600px' }}>
          <input
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search items..."
          />
          <button
            style={{ backgroundColor: "#ff2b85", color: "white" }}
            className="btn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.map(item => (
          <div className="card  mb-3 mx-3" style={{ width: "18rem" }} key={item.id}>
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
          <ModalHeader
            style={{ backgroundColor: "#ff2b85", color: "white" }}
            toggle={handleCloseModal}
          >
            {selectedItem.title}
          </ModalHeader>
          <ModalBody>
            <img src={selectedItem.image} alt={selectedItem.title} style={{ width: "100%" }} />
            <p>{selectedItem.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default Ouritem;
