import React, { useState } from 'react';
import allOver from './pics/all-over-highlight.png';
import top from './pics/epigastrium-highlight.png';
import topAc from './pics/epigastrium-active.png';
import middle from './pics/umbilicus-highlight.png';
import middleAc from './pics/umbilicus-active.png';
import rup from './pics/ruq-highlight.png';
import rupAc from './pics/ruq-active.png';
import rlq from './pics/rlq-highlight.png';
import rlqAc from './pics/rlq-active.png';
import bottom from './pics/suprapubic-highlight.png'
import bottomAc from './pics/suprapubic-active.png'
import lup from './pics/luq-highlight.png';
import lupAc from './pics/luq-active.png';
import llq from './pics/llq-highlight.png';
import llqAc from './pics/llq-active.png';
import './App.css';

const IMAGE_MAP = [
  {
    id: '1',
    overlay: [allOver]
  },
  {
    id: '2',
    overlay: [rup, rupAc]
  },
  {
    id: '3',
    overlay: [top, topAc]
  },
  {
    id: '4',
    overlay: [lup, lupAc]
  },
  {
    id: '5',
    overlay: [llq, llqAc]
  },
  {
    id: '6',
    overlay: [bottom, bottomAc]
  },
  {
    id: '7',
    overlay: [rlq, rlqAc]
  },
  {
    id: '8',
    overlay: [middle, middleAc]
  },
];

export default function ImageOverlay({selectedArea, initialZIndex, parentReRenderCallback }) {
  
    const [zIndex, setZindex] = useState(initialZIndex);

    function updateZIndex() {
        // If the overlay image is on top, then moves it behind so base image can be selected.
        const newZIndex = zIndex === initialZIndex ? -1: initialZIndex;
        setZindex(newZIndex);
 
        if (newZIndex === -1) {
          parentReRenderCallback();
          setZindex(initialZIndex);
        }
    }

    function onImageOneClick(e) {
        updateZIndex();
      };
    
      function onImageTwoClick(e) {
        updateZIndex();
      };

    const overlayImageOne = IMAGE_MAP.find(i => i.id === selectedArea.name)?.overlay[0];
    const overlayImageTwo = IMAGE_MAP.find(i => i.id === selectedArea.name)?.overlay[1];


  if (overlayImageOne === undefined) return;

  return (
    <div className='image-overlay' style={{ zIndex: zIndex }} >
      <img
        src={overlayImageOne}
        alt={selectedArea.id}
        onClick={(e) => onImageOneClick(e)} 
      />,
      <img
        className='Img-overlayAc'
        src={overlayImageTwo}
        alt={selectedArea.id}
        onClick={(e) => onImageTwoClick(e)}
      />
    </div>
    );
};
