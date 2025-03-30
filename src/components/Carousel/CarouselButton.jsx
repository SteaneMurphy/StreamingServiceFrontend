import './CarouselButton.css';

function CarouselButton({ type }) {

    return (
        type === "prev" ?
        <div 
            className="carouselButton prev"
        ></div> :
        <div 
            className="carouselButton next"
        ></div>
    )
};

export default CarouselButton;
