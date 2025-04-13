import React from 'react';
import './ChevronRight.css';

function ChevronRight() {

  return (
    <div className="chevronRightContainer">
        <svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-chevron-right">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>
  );
}

export default ChevronRight;
