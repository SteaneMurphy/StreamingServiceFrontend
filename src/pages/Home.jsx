import './Home.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Featured from '../components/Featured.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import Footer from '../components/Footer.jsx';

function Home() {

const [genres, setGenres] = useState([]);

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
                setGenres(data.genres);
            }
            catch (error) 
            {
                setError(error.message);
                console.error("Error fetching categories:", error);
            };
        };
        fetchGenres();
}, []);

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
