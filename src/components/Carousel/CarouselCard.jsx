/*
  This component displays the movie card image and also displays the movie
  title card information. This information is only displayed if the 'hover'
  state is set to true.

  This state is updated using the 'setHover' useState hook. It updates upon
  mouseEnter or mouseLeave.

  If 'hover' is true, the logic in the JSX below allows the subcomponent 'CardDescriptor'
  to be created and placed in the DOM. The css rules then style it.

  React Memo is also used for this component. Memo stores the component and does not
  re-render it unless its own information changes. Usually, when a parent component
  changes, all its child components are re-rendered as well. I did not want this functionality
  as there are hundreds of CarouselCard components in the DOM. This ensures a more efficient and
  quicker application.
*/

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
