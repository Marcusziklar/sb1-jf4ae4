import React from 'react';
import { Apartment } from '../types';
import { DollarSign, Home, MapPin, Maximize } from 'lucide-react';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

interface ApartmentCardProps {
  apartment: Apartment;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment, onSwipeLeft, onSwipeRight }) => {
  const [{ x, rotate }, api] = useSpring(() => ({ x: 0, rotate: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) {
        if (dir === 1) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
      }

      api.start({
        x: down ? mx : 0,
        rotate: down ? mx / 10 : 0,
        immediate: down,
      });
    },
    { axis: 'x' }
  );

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        rotate,
        touchAction: 'none',
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <img src={apartment.imageUrl} alt={apartment.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{apartment.title}</h2>
        <p className="text-gray-600 mb-4">{apartment.description}</p>
        <div className="flex items-center mb-2">
          <DollarSign className="w-5 h-5 mr-2 text-green-500" />
          <span className="font-semibold">${apartment.price}/month</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 mr-2 text-blue-500" />
          <span>{apartment.location}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Home className="w-5 h-5 mr-1 text-gray-500" />
            <span>{apartment.bedrooms} bed</span>
          </div>
          <div className="flex items-center">
            <Home className="w-5 h-5 mr-1 text-gray-500" />
            <span>{apartment.bathrooms} bath</span>
          </div>
          <div className="flex items-center">
            <Maximize className="w-5 h-5 mr-1 text-gray-500" />
            <span>{apartment.area} sqft</span>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ApartmentCard;