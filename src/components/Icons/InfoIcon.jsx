import React from 'react';
import './InfoIcon.css';

function InfoIcon() {

  return (
    <div className="infoIconContainer">
        <div className="infoIconSubContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="ChevronDownStandard"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 15.5859L19.2928 8.29297L20.7071 9.70718L12.7071 17.7072C12.5195 17.8947 12.2652 18.0001 12 18.0001C11.7347 18.0001 11.4804 17.8947 11.2928 17.7072L3.29285 9.70718L4.70706 8.29297L12 15.5859Z"
                    fill="white"
                />
            </svg>
        </div>
    </div>
  );
}

export default InfoIcon;
