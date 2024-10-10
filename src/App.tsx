import React, { useState, useEffect } from 'react';
import ApartmentCard from './components/ApartmentCard';
import SwipeButtons from './components/SwipeButtons';
import ApartmentUpload from './components/ApartmentUpload';
import { fetchApartments } from './data/apartments';
import { Building } from 'lucide-react';
import { Apartment } from './types';

function App() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedApartments, setLikedApartments] = useState<string[]>([]);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    async function loadApartments() {
      const fetchedApartments = await fetchApartments();
      setApartments(fetchedApartments);
    }
    loadApartments();
  }, []);

  // ... (rest of the component remains the same)
}

export default App;