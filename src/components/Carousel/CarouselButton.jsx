import './CarouselButton.css';

function CarouselButton({ type, setCurrentIndex, cardsLength }) {

    function nextCard() {
        setCurrentIndex(prevIndex => (prevIndex + 1) % cardsLength);
    };
    
    function prevCard() {
        setCurrentIndex(prevIndex => (prevIndex - 1 + cardsLength) % cardsLength);
    };

    return (
        type === "prev" ?
        <div 
            className="carouselButton prev"
            onClick={prevCard}
        ></div> :
        <div 
            className="carouselButton next"
            onClick={nextCard}
        ></div>
    )
};

export default CarouselButton;
