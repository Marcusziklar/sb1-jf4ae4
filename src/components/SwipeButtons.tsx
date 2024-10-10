import React from 'react';
import { X, Heart } from 'lucide-react';

interface SwipeButtonsProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onSwipeLeft, onSwipeRight }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={onSwipeLeft}
        className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <button
        onClick={onSwipeRight}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <Heart className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SwipeButtons;