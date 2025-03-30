import React from 'react';
import './AddIcon.css';

function AddIcon() {

  return (
    <div className="addIconContainer">
        <div className="addIconSubContainer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="PlusStandard"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
                    fill="white"
                />
            </svg>
        </div>
    </div>
  );
}

export default AddIcon;
