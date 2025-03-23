import './Home.css';
import Navbar from '../components/Navbar/Navbar.jsx';
import Featured from '../components/Featured.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import TopList from '../components/TopList.jsx';

function Home() {

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
        <Carousel /> {/* for each catergory, instantiate a carousel component*/}
        <TopList />
    </>
  )
};

export default Home;
