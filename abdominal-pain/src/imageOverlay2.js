import React, { useState } from 'react';
import dip from './pics/dip-highlight.png'
import dipAc from './pics/dip-active.png'
import mcp from './pics/mcp-highlight.png'
import mcpAc from './pics/mcp-active.png'
import all from './pics/others-highlight.png'
import pip from './pics/pip-highlight.png'
import pipAc from './pics/pip-active.png'
import './App.css';

const IMAGE_MAP = [
    {
        id: '1',
        overlay: [all]
    },
    {
        id: '2',
        overlay: [dip, dipAc]
    },
    {
        id: '3',
        overlay: [mcp, mcpAc]
    },
    {
        id: '4',
        overlay: [pip, pipAc]
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


