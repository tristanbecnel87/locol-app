'use client';
import React, { useState, useEffect } from 'react';
import config from 'app/aws-exports';
import { Amplify, Auth, Storage } from 'aws-amplify';

Amplify.configure(config);

const Page = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Fetch the list of services from the database
        const currentUser = await Auth.currentAuthenticatedUser();
        const servicesData = await Storage.list('services/', { level: 'public' });
        console.log('Services', servicesData);

        // Retrieve the service data from each file
        const fetchedServices = await Promise.all(servicesData.results.map(async (item) => {
          const serviceDataUrl = await Storage.get(item.key);
          const response = await fetch(serviceDataUrl);
          console.log('Service DataURLRes:', response);

          try {
            const serviceData = await response.json();

            console.log('Service Data:', serviceData); // Log the parsed data
            const deliveryTime = serviceData.deliveryTime;
            const price = serviceData.price;
            const serviceName = serviceData.serviceName;

            console.log('Delivery Time:', deliveryTime);
            console.log('Price:', price);
            console.log('Service Name:', serviceName);

            return serviceData;
          } catch (error) {
            console.error('Error parsing service data:', error);
            return null; // Handle the error gracefully, you can modify this as needed
          }
        }));

        // Set the fetched services in the state
        setServices(fetchedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2>Marketplace</h2>
      <div>
        {services.map((service, index) => (
          <div key={index}>
            <h3>Service: {service.serviceName}</h3>
            <p>Price: ${service.price}</p>
            <p>Delivery Time: {service.deliveryTime} weeks</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
