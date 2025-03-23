import { useState, useRef, useEffect } from "react";
import './Carousel.css';
import CarouselCard from './CarouselCard';
import CarouselButton from './CarouselButton';

function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = 
  [
    <CarouselCard key={0} />,
    <CarouselCard key={1} />,
    <CarouselCard key={2} />,
    <CarouselCard key={3} />,
    <CarouselCard key={4} />,
    <CarouselCard key={5} />,
    <CarouselCard key={6} />,
    <CarouselCard key={7} />,
    <CarouselCard key={8} />,
    <CarouselCard key={9} />,
    <CarouselCard key={10} />,
    <CarouselCard key={11} />,
    <CarouselCard key={12} />
  ];

  return (
    <div className="carouselContainer">
      <div>
        <span className="carouselHeading">Your Next Watch</span>
      </div>
      <div 
        className="carouselSubContainer"
        style={{ transform: `translateX(-${currentIndex * 1750}px)` }}
      >
        {cards}
      </div>
        <CarouselButton 
          type={"prev"} 
          setCurrentIndex={setCurrentIndex}
          cardsLength={cards.length}
        />
        <CarouselButton 
          type={"next"} 
          setCurrentIndex={setCurrentIndex}
          cardsLength={cards.length}
        />
    </div>
  )
};

export default Carousel;
