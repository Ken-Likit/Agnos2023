import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import defaultAbs from './pics/default-abs.png';
import ImageOverlay from './imageOverlay';
import './App.css';

// Use react image mapper package
// Image map generated from https://www.image-map.net/
const MAP = {
  name: "image-map",
  areas: [
    { name: "1", shape: "rect", coords: [516,854,275,933]},
    { name: "2", shape: "poly", coords: [329,405,376,463,343,502,274,502,277,435]},
    { name: "3", shape: "poly", coords: [344,389,399,338,454,393,399,466] },
    { name: "4", shape: "poly", coords: [423,463,466,405,514,424,525,505,457,504]},
    { name: "5", shape: "poly", coords: [426,560,454,526,528,527,517,599,473,638] },
    { name: "6", shape: "poly", coords: [400,566,437,606,452,641,400,669,354,645,362,599]},
    { name: "7", shape: "poly", coords: [340,525,370,561,332,633,266,575,268,530]},
    { name: "8", shape: "circle", coords: [398,520,41]},
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
          <h2>Question 1: Abdominal Pain</h2>
          <p>Where do you feel pain the most?</p>
          <div className='image-container'>
            <div className='image'>
              <ImageMapper 
                src={defaultAbs}
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