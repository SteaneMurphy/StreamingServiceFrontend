import React from 'react';
import { useState, useMemo } from 'react';
import './CarouselCard.css';
import CardDescriptor from './CardDescriptor';

function CarouselCard({ imagePath }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="carouselCardContainer"
         onMouseLeave={() => setHover(false)}
    >
      <img
        className="cardImage"
        src={imagePath}
        alt="Carousel"
        loading="lazy"
        onMouseEnter={() => setHover(true)}
      />
      {hover && <CardDescriptor />}
    </div>
  );
}

export default React.memo(CarouselCard);
