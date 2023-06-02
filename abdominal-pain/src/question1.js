import React, { useState } from 'react';
import allOver from './pics/all-over-highlight.png';
import defaultAbs from './pics/default-abs.png';
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

//Function that creates the first section.

export default function Question1() {
    // Keeps track of which area was selected.
    const [selectedArea, setSelectedArea] = useState(0);

    function imgClick(e, area) {
        // This will prevent from page reload.
        e.preventDefault();
        setSelectedArea(area);
      };

    return (
      //Header and main image.
      <div className="App-header">
        <h2>Question 1: Abdominal Pain</h2>
        <p>Where do you feel pain the most?</p>
        <img 
          src={defaultAbs}
          alt="Abdominal Pain"
          useMap="#image-map"
          position="absolute"
        />
        
        {/* Maps clickable area to to image. */}
        <map name="image-map">
          <area 
            href="" 
            coords="269,859,532,931" 
            shape="rect" 
            onClick={(e) => imgClick(e, 1)}
            alt="all"/> 
            {/* Updates which area is pressed and overlays highlight and active png. */}
            {selectedArea == 1 && 
              <img className="Img-overlay" src={allOver}/>
            }
            
          <area 
            shape="poly" 
            coords="399,337,388,342,361,367,343,395,371,435,399,466,427,437,456,397,437,363,419,348" 
            alt="top" 
            href=""
            onClick={(e) => imgClick(e, 2)}/>
            {selectedArea == 2 && 
              <div>
                <img className="Img-overlayAb" src={top}/>
                <img className="Img-overlayAc" src={topAc}/>
              </div>
            }

          <area 
            alt="middle" 
            title="middle" 
            href="" 
            coords="399,517,40" 
            shape="circle"
            onClick={(e) => imgClick(e, 3)}/>
            {selectedArea == 3 && 
              <div>
                <img className="Img-overlayAb" src={middle}/>
                <img className="Img-overlayAc" src={middleAc}/>
              </div>
            }

          <area
            alt="top right" 
            title="top right" 
            href="" 
            coords="357,433,380,467,362,478,355,487,348,507,270,507,275,443,279,429,327,402" 
            shape="poly"
            onClick={(e) => imgClick(e, 4)}/>
            {selectedArea == 4 && 
              <div>
                <img className="Img-overlayAb" src={rup}/>
                <img className="Img-overlayAc" src={rupAc}/>
              </div>
            }

          <area 
            alt="bot right" 
            title="bot right" 
            href="" 
            coords="271,524,344,525,354,547,372,561,349,600,338,633,323,640,289,608,267,573" 
            shape="poly"
            onClick={(e) => imgClick(e, 5)}/>
            {selectedArea == 5 && 
              <div>
                <img className="Img-overlayAb" src={rlq}/>
                <img className="Img-overlayAc" src={rlqAc}/>
              </div>
            }

          <area  
            alt="bot middle" 
            title="bot middle" 
            href="" 
            coords="397,569,374,584,358,607,347,641,369,662,398,673,431,661,457,643,429,586,412,573" 
            shape="poly"
            onClick={(e) => imgClick(e, 6)}/>
            {selectedArea == 6 && 
              <div>
                <img className="Img-overlayAb" src={bottom}/>
                <img className="Img-overlayAc" src={bottomAc}/>
              </div>
            }

          <area 
            alt="top left" 
            title="top left" 
            href="" 
            coords="467,404,495,412,516,425,530,507,452,508,443,484,420,465" 
            shape="poly"
            onClick={(e) => imgClick(e, 7)}/>
            {selectedArea == 7 && 
              <div>
                <img className="Img-overlayAb" src={lup}/>
                <img className="Img-overlayAc" src={lupAc}/>
              </div>
            }

          <area 
            alt="bot left" 
            title="bot left" 
            href="" 
            coords="453,526,491,525,527,526,527,565,514,598,498,617,474,638,458,611,448,589,425,565,446,547" 
            shape="poly"
            onClick={(e) => imgClick(e, 8)}/>
            {selectedArea == 8 && 
              <div>
                <img className="Img-overlayAb" src={llq}/>
                <img className="Img-overlayAc" src={llqAc}/>
              </div>
            }
        </map>
      
      </div>
    );
  };


