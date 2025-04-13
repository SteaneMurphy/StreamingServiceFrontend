import { useState, useEffect, useRef } from 'react';
import './Featured.css'

function Featured() {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.play();
    }
  }, []);

  return (
    <div className="featuredContainer">
      <video ref={videoRef} autoPlay muted loop preload="metadata" width="100%">
        <source src="https://res.cloudinary.com/dgj4ncgyt/video/upload/v1744516557/trailer_opxdsg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='featuredOverlay'></div>
    </div>
  )
}

export default Featured
