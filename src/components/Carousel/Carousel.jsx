import { useState, useRef, useEffect } from "react";
import './Carousel.css';
import CarouselCard from './CarouselCard';
import CarouselButton from './CarouselButton';

function Carousel({ genreId, genreName }) {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const cardWidth = 306;
  const cardsPerView = 6;

  const handleNext = () => {
    setIndex(prev => Math.min(prev + 1, Math.floor(movies.length / cardsPerView) - 1));
  };
  
  const handlePrev = () => {
    setIndex(prev => Math.max(prev - 1, 0));
  };

  const offset = -(index * cardWidth * cardsPerView);

  useEffect(() => {
    const fetchMovies = async () => 
        {
            try
            {
                const token = import.meta.env.VITE_API_KEY;
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
                    {
                        method: "GET",
                        headers: 
                        {
                            'Authorization': `Bearer ${token}`,
                            'accept': 'application/json',
                        },
                    }
                );

                const data = await response.json();
                setMovies(data.results);
            }
            catch (error) 
            {
                setError(error.message);
                console.error("Error fetching movies:", error);
            };
        };
        fetchMovies();
  }, []);

  return (
    <div className="carouselContainer">
      <div className="carouselHeadingContainer">
        <span className="carouselHeading">{genreName}</span>
      </div>
      <div 
        className="carouselSubContainer"
        // style={{ transform: `translateX(${offset}px)` }}
      >
       {movies.map((movie) => (
          <CarouselCard
            key={movie.id}
            imagePath={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
        ))}
      </div>
        <CarouselButton 
          type={"prev"}
          onClick={handlePrev}
        />
        <CarouselButton 
          type={"next"}
          onClick={handleNext} 
        />
    </div>
  )
};

export default Carousel;
