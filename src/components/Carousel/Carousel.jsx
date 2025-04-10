import { useState, useRef, useEffect } from "react";
import './Carousel.css';
import CarouselCard from './CarouselCard';
import CarouselButton from './CarouselButton';

function Carousel({ genreId, genreName }) {

  //increment index by 1
  //increment slider by 1 card width

  //if click next
    //add prev card to end of list
  //if click back
    //add last card to start of list

  const [movies, setMovies] = useState([]);

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
  
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  // const firstCards = 
  // [
  //   <CarouselCard key={0} />,
  //   <CarouselCard key={1} />,
  //   <CarouselCard key={2} />,
  //   <CarouselCard key={3} />,
  //   <CarouselCard key={4} />,
  //   <CarouselCard key={5} />,
  // ];

  // const secondCards = 
  // [
  //   <CarouselCard key={6} />,
  //   <CarouselCard key={7} />,
  //   <CarouselCard key={8} />,
  //   <CarouselCard key={9} />,
  //   <CarouselCard key={10} />,
  //   <CarouselCard key={11} />,
  // ];

  // const thirdCards = 
  // [
  //   <CarouselCard key={12} />,
  //   <CarouselCard key={13} />,
  //   <CarouselCard key={14} />,
  //   <CarouselCard key={15} />,
  //   <CarouselCard key={16} />,
  //   <CarouselCard key={17} />
  // ];
  
  // const cards = 
  // [
  //   firstCards,
  //   secondCards,
  //   thirdCards    
  // ];

  return (
    <div className="carouselContainer">
      <div>
        <span className="carouselHeading">{genreName}</span>
      </div>
      <div 
        className="carouselSubContainer"
      >
        {/* {cards} */}
        {movies.length > 0 ? (
            movies.map((movie) => (
                <CarouselCard key={movie.id} imagePath={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
            ))
        ) : (
            <span>loading...</span>
        )}
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
