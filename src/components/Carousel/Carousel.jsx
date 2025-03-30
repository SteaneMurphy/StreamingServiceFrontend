import { useState, useRef, useEffect } from "react";
import './Carousel.css';
import CarouselCard from './CarouselCard';
import CarouselButton from './CarouselButton';

function Carousel() {

  //increment index by 1
  //increment slider by 1 card width

  //if click next
    //add prev card to end of list
  //if click back
    //add last card to start of list

  const firstCards = 
  [
    <CarouselCard key={0} />,
    <CarouselCard key={1} />,
    <CarouselCard key={2} />,
    <CarouselCard key={3} />,
    <CarouselCard key={4} />,
    <CarouselCard key={5} />,
  ];

  const secondCards = 
  [
    <CarouselCard key={6} />,
    <CarouselCard key={7} />,
    <CarouselCard key={8} />,
    <CarouselCard key={9} />,
    <CarouselCard key={10} />,
    <CarouselCard key={11} />,
  ];

  const thirdCards = 
  [
    <CarouselCard key={12} />,
    <CarouselCard key={13} />,
    <CarouselCard key={14} />,
    <CarouselCard key={15} />,
    <CarouselCard key={16} />,
    <CarouselCard key={17} />
  ];
  
  const cards = 
  [
    firstCards,
    secondCards,
    thirdCards    
  ];

  return (
    <div className="carouselContainer">
      <div>
        <span className="carouselHeading">Your Next Watch</span>
      </div>
      <div 
        className="carouselSubContainer"
      >
        {cards}
      </div>
        <CarouselButton 
          type={"prev"}
        />
        <CarouselButton 
          type={"next"} 
        />
    </div>
  )
};

export default Carousel;
