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
