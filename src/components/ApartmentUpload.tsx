import React, { useState } from 'react';
import { createApartment, createUser, getUserByEmail } from '../utils/db';

const ApartmentUpload: React.FC = () => {
  // ... (previous state and handleChange function remain the same)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let user = await getUserByEmail(formData.ownerEmail);
      if (!user) {
        user = await createUser({ name: formData.ownerName, email: formData.ownerEmail });
      }
      await createApartment({
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        imageUrl: formData.imageUrl,
        location: formData.location,
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        area: Number(formData.area),
        ownerId: user.id,
      });
      alert('Apartment uploaded successfully!');
      // Reset form data
      // ...
    } catch (error) {
      console.error('Error uploading apartment:', error);
      alert('Error uploading apartment. Please try again.');
    }
  };

  // ... (rest of the component remains the same)
};

export default ApartmentUpload;