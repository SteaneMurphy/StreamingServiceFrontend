/*
    This is the main homepage view. It contains the following main components:
        - Navigation bar
        - Featured movie trailer
        - Movie selection carousels (by genre)
        - Footer
    
    This application uses two main React hooks and features, useEffect and useState. In the home component,
    useEffect is triggered by the component mount which in turns calls the 'fetchGenres' function. This function
    grabs movie genre data from 'The Movie Database' and stores the result in the 'genres' array. This results is
    stored by the useState hook, using the associated 'setGenres' function.

    As this hook is async, I cannot immediately use the data from the array. Due to this, I use a ternary to display
    a temporary 'loading' text which is then overwritten by a re-render of 'carousel' components once the 'genres' array
    is populated.

    Wow.
*/

import './Home.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Featured from '../components/Featured.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import Footer from '../components/Footer.jsx';

function Home() {

// useState hook used here to store the result of fetch call
const [genres, setGenres] = useState([]);

// the useEffect hook runs only once, upon component mount. This is set by the dependency array ([])
useEffect(() => {
    const fetchGenres = async () => 
        {
            try
            {
                const token = import.meta.env.VITE_API_KEY;
                const response = await fetch(
                    `https://api.themoviedb.org/3/genre/movie/list`,
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
                // useState array variable updated here
                setGenres(data.genres);
            }
            catch (error) 
            {
                setError(error.message);
                console.error("Error fetching categories:", error);
            };
        };
        // calls the function to start
        fetchGenres();
}, []);

// set of custom link text for the navbar
const links = 
    [
        { 
            name: "Home", url: "#" 
        },
        { 
            name: "TV Shows", url: "#" 
        },
        { 
            name: "Movies", url: "#" 
        },
        { 
            name: "New & Popular", url: "#" 
        },
        { 
            name: "My List", url: "#" 
        },
        { 
            name: "Browse by Languages", url: "#" 
        },
    ];

  /* For each genre in the 'genres' array, a new 'Carousel component' is created.
     The data stored in 'genres' is then sent to the component for use in its display,
     in this case, the genre id and genre name.

     The function used to iterate through the array is the 'map' function, a built in function
     in JavaScript that is a foreach loop that allows a function to execute each iteration.

     A ternary is used to display a temporary loading text or the carousel components, this is
     dependent on the genres array not being empty. When that changes, React knows to re-render
     this component and the map functionality is then triggered.
  */
  return (
    <>
        <Navbar links={links}/>
        <Featured />
        <div className='carouselContainers'>
            {genres.length > 0 ? (
                genres.map((genre) => (
                    <Carousel key={genre.id} genreId={genre.id} genreName={genre.name}/>
                ))
            ) : (
                <span>loading...</span>
            )}
        </div>
        <Footer />
    </>
  )
};

export default Home;
