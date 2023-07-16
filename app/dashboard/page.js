'use client';
import React, { useState } from 'react';
import { Auth, Storage } from 'aws-amplify';

const Page = () => {
  const [selectedService, setSelectedService] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { name: 'Social Media Marketing', value: 'social-media-marketing' },
    { name: 'Graphic Design', value: 'graphic-design' },
    { name: 'Web Development', value: 'web-development' },
  ];

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDeliveryTimeChange = (event) => {
    setDeliveryTime(event.target.value);
  };

  const handleServiceUpload = () => {
    // Perform actions to upload the service details, e.g., save to backend
    console.log('Selected Service:', selectedService);
    console.log('Price:', price);
    console.log('Delivery Time:', deliveryTime);

    // Prepare the data to be uploaded
    const serviceData = {
      serviceName: selectedService,
      price: price,
      deliveryTime: deliveryTime,
    };

    uploadService(serviceData);

    // Reset the form fields
    setSelectedService('');
    setPrice('');
    setDeliveryTime('');

    // Close the modal
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const uploadService = async (serviceData) => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;

      // Prepare the data to be uploaded
      const data = {
        deliveryTime: serviceData.deliveryTime,
        price: serviceData.price,
        serviceName: serviceData.serviceName,
      };

      // Convert the data to a JSON string
      const jsonData = JSON.stringify(data);

      // Upload the data to the database
      const result = await Storage.put(`services/${userId}/service.json`, jsonData, {
        contentType: 'application/json',
      });

      console.log('Service uploaded successfully:', result);
    } catch (error) {
      console.error('Error uploading service:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => Auth.signOut()}>Log Out</button>

      <h3>Create Service</h3>
      <button type="button" onClick={openModal}>
        Call-to-Action Button
      </button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h4>Add a New Service</h4>
            <div>
              <label htmlFor="service">Service:</label>
              <select id="service" value={selectedService} onChange={handleServiceChange}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price">Price ($):</label>
              <input type="number" id="price" value={price} onChange={handlePriceChange} />
            </div>
            <div>
              <label htmlFor="deliveryTime">Delivery Time (weeks):</label>
              <input type="number" id="deliveryTime" value={deliveryTime} onChange={handleDeliveryTimeChange} />
            </div>
            <button onClick={handleServiceUpload}>Upload Service</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
