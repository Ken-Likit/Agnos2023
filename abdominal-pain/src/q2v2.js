import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import hand from './pics/default-finger.png';
import ImageOverlay from './imageOverlay2';
import './App.css';

// Use react image mapper package
// Image map generated from https://www.image-map.net/
const MAP = {
    name: "image-map",
    areas: [
        {name: "1", shape: "rect", coords: [121,881,685,962]},
        {name: "2", shape: "circle", coords: [191,251,31]},
        {name: "2", shape: "circle", coords: [296,148,20]},
        {name: "2", shape: "circle", coords: [384,104,23]},
        {name: "2", shape: "circle", coords: [486,129,22]},  
        {name: "3", shape: "circle", coords: [262,417,33]},
        {name: "3", shape: "circle", coords: [329,386,31]},
        {name: "3", shape: "circle", coords: [404,364,31]},
        {name: "3", shape: "circle", coords: [479,366,32]},
        {name: "3", shape: "circle", coords: [592,535,29]},
        {name: "4", shape: "circle", coords: [223,325,22]},
        {name: "4", shape: "circle", coords: [304,249,28]},
        {name: "4", shape: "circle", coords: [393,214,25]},
        {name: "4", shape: "circle", coords: [486,228,27]},
        {name: "4", shape: "circle", coords: [658,422,23]},
    ]
}

export default function Question1() {
    // Keeps track of which area was selected.
    const [selectedArea, setSelectedArea] = useState([]);


    const mapperAreaClickHandler = async (item, idx, event) => {
      const currentSelectedAreaId = selectedArea;
      if (Array.isArray(currentSelectedAreaId)) {
        setSelectedArea(item);
      }
    };

    const forceReRender = async (event) => {
        setSelectedArea([]);
      }

    return (
      //Header and main image.
      <div className="App-header">
        <h2>Question 2: Hand Pain</h2>
        <p>Where do you feel pain the most?</p>
        <div className='image-container'>
            <div className='image'>
              <ImageMapper 
                src={hand}
                map={MAP} 
                onClick={(area, i, e) => mapperAreaClickHandler(area, i, e)}
              />
            </div>
            <ImageOverlay 
              selectedArea={selectedArea}
              initialZIndex={2} 
              parentReRenderCallback={() => forceReRender() }
              />
          </div>
      </div>
    );
  };