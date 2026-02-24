'use client';
import { useEffect, useState } from 'react';

const images = ['/images/all.jpeg', '/sport.jpeg'];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  


  const handleImageClick = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        onClick={handleImageClick}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: '0.5s ease',
        }}
      />
      
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: current === index ? '#333' : '#ccc',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'background-color 0.3s ease',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
