import React, { useState } from 'react';
import { ModalContainer } from './Modal.styled';

const Modal = ({ camper, onClose }) => {
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBookingFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Отправка формы на сервер или обработка данных
    console.log('Form submitted:', bookingFormData);
  };

  return (
    <ModalContainer>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>{camper.name}</h2>
        <p>Rating: {camper.rating}</p>
        <p>Location: {camper.location}</p>
        <p>Price: ${camper.price}</p>
        <div className="photos">
          {camper.gallery.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} />
          ))}
        </div>
        <p>Description: {camper.description}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingFormData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingFormData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={bookingFormData.bookingDate}
            onChange={handleChange}
            required
          />
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={bookingFormData.comment}
            onChange={handleChange}
          />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default Modal;
