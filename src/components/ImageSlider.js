import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ImageSlider = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const { scrollYProgress } = useScroll();

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center">
      {images.map((imageUrl, index) => (
        <motion.img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          style={{ width: '90%', height: 'auto', position: 'absolute' }}
          className={`image-slide ${currentIndex === index ? 'active' : ''}`}
        />
      ))}
      <button onClick={handlePreviousImage} className="bg-black text-white p-2 absolute top-[50%] left-[10px] translate-y-[-50%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8L4 8l-2.29 2.29a1 1 0 000 1.414l3.536 3.536A1 1 0 007 13h3.536a1 1 0 001.414-1.414L20 8z" />
        </svg>
      </button>
      <button onClick={handleNextImage} className="bg-black text-white p-2 absolute top-[50%] right-[10px] translate-y-[-50%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 8L20 8l-2.29-2.29a1 1 0 000-1.414L6.764 5.764A1 1 0 005 4h3.536a1 1 0 001.414 1.414l-3.536 3.536A1 1 0 008 13v3.536a1 1 0 001.414 1.414L20 8z" />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;