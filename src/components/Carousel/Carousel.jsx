/*
    This is the main carousel component. It is comprised of four smaller components that come together
    to make a working carousel.

    The carousel contains:
      - A heading element
      - A collection of 'CarouselCard' components (the individual movie cards)
      - Two buttons (show more, show previous)
    
    'useState' is used to store both the carousel index (for its movement) and the list of movies
    for each particular carousel (for example, 20 movies in the action genre).

    A fetch function is used to grab the movie details and is stored using the 'setMovies' function inside of
    the useState hook. This updates the 'movies' array. This array is then iterated over and populates all the
    movie cards components.
*/

import { useState, useRef, useEffect } from "react";
import './Carousel.css';
import CarouselCard from './CarouselCard';
import CarouselButton from './CarouselButton';

function Carousel({ genreId, genreName }) {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  
  // set sizing variables for carousel movement calculation
  const cardWidth = 306;
  const cardsPerView = 6;

  // determines how many clicks of next can be done (ie; 20 movies / cardsPerView = 3)
  const handleNext = () => {
    setIndex(prev => Math.min(prev + 1, Math.floor(movies.length / cardsPerView) - 1));
  };
  
  // moves the index back by 1 out of the 3 from the example above
  const handlePrev = () => {
    setIndex(prev => Math.max(prev - 1, 0));
  };

  // specific pixel offset for the translateX property below in the JSX. Determines how far to translate
  // the subCarousel element in the X axis
  const offset = -(index * cardWidth * cardsPerView);

  // grabs a list of movies for a specific catergory, called only once on mount
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
                // updates the state with the fetched results
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

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  /*
    For each movie in the 'movies' array, creates a new 'CarouselCard' component and sends the related
    data to the component, in this case, the title card image path.

    The 'translateX' moves the subContainer by the amount calculated in 'offset' in the X axis
  */
  return (
    <div className="carouselContainer">
      <div className="carouselHeadingContainer">
        <span className="carouselHeading">{genreName}</span>
      </div>
      <div 
        className="carouselSubContainer"
        style={{ transform: `translateX(${offset}px)` }}
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
