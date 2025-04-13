/*
    This component uses a ternary to determine which button is to be displayed. In this
    case its either the ChevronRight or ChevronLeft subcomponents (left/right arrow icons).

    The type is determined by the prop sent in as either "prev" or "next", it also assigns the
    onClick functions from its parent components, each one specific for either previous or next.
*/

import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';
import './CarouselButton.css';

function CarouselButton({ type, onClick }) {

    return (
        type === "prev" ?
        <div 
            className="carouselButton prev"
            onClick={onClick}
        >
            <ChevronLeft />
        </div> :
        <div 
            className="carouselButton next"
            onClick={onClick}
        >
            <ChevronRight />
        </div>
    )
};

export default CarouselButton;
