/*
    This is the movie card title description component.
    Eventually further information would be passed down into this card from
    the information fetched in its parent
*/

import React from 'react';
import './CardDescriptor.css';
import PlayIcon from '../Icons/PlayIcon';
import LikeIcon from '../Icons/LikeIcon';
import AddIcon from '../Icons/AddIcon';
import InfoIcon from '../Icons/InfoIcon';

function CardDescriptor() {

  return (
    <div className="cardDescriptorContainer">
        <div className="cardButtonContainer">
            <div className="cardDescriptorButtonLeft">
                <PlayIcon />
                <AddIcon />
                <LikeIcon />            
            </div>
            <div className="cardDescriptorButtonRight">
                <InfoIcon />
            </div>
        </div>
        <div className="cardDescriptorMidInfo">
            <div className="rating">
                <span>MA 15+</span>
            </div>
            <span className="episode">6 Episodes</span>
            <div className="quality">
                <span>HD</span>
            </div>
        </div>
        <div className="cardDescriptorBotInfo">
            <span>Gritty</span>
            <div className="cardDescriptorDot"></div>
            <span>Dark</span>
            <div className="cardDescriptorDot"></div>
            <span>Mystery</span>
        </div>
    </div>
  );
}

export default CardDescriptor;
