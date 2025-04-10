import './Home.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Featured from '../components/Featured.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import TopList from '../components/TopList.jsx';

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
                    // `https://api.themoviedb.org/3/discover/movie?with_genres=28`,
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

useEffect(() => {
    console.log(genres);
}, [genres]);

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
        {genres.length > 0 ? (
            genres.map((genre) => (
                <Carousel key={genre.id} genreId={genre.id} genreName={genre.name}/>
            ))
        ) : (
            <span>loading...</span>
        )}
        <TopList />
    </>
  )
};

export default Home;
