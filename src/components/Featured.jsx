/*
  This component streams a video from the Cloudinary cloud server. I originally used the 'useRef' React hook
  but determined it was not needed. The 'useRef' hook allowed me to reference a specific element in the DOM. In
  this case, it was the video element, as I was trying to make the autoplay functionality work.

  The reference is linked in the JSX, by using the 'ref' property and linking it to the variable declared above.

  I solved this by fixing the autoplay syntax from 'autoplay' to 'autoPlay'. Love it.
*/

import { useEffect, useRef } from 'react';
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
