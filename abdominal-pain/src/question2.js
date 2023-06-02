import React, { useState } from 'react';
import hand from './pics/default-finger.png'
import dip from './pics/dip-highlight.png'
import dipAc from './pics/dip-active.png'
import mcp from './pics/mcp-highlight.png'
import mcpAc from './pics/mcp-active.png'
import all from './pics/others-highlight.png'
import pip from './pics/pip-highlight.png'
import pipAc from './pics/pip-active.png'

export default function Question2() {
    
    //Keeps track of which area is selected.
    const [selectedArea, setSelectedArea] = useState(0);

    function imgClick(e, area) {
        // This will prevent from page reload.
        e.preventDefault();
        setSelectedArea(area);
      };
      
      return (
        //Maps clickable area to to image.
        <div className="App-header">
            <h2>Question 2: Finger Pain</h2>
            <p>Where do you feel pain the most?</p>
            <img 
                src={hand}
                alt="Hand Pain"
                useMap="#image-map"
                position="absolute"
            />

          {/* Maps clickable area to to image. */}
          <map name="image-map">
            <area 
              href="" 
              coords="121,881,685,962" 
              shape="rect" 
              onClick={(e) => imgClick(e, 1)}
              alt="all"/> 
              {/* Updates which area is pressed and overlays highlight and active png. */}
              {selectedArea == 1 && 
                <img className="Img-overlay" src={all}/>
              }

            <area 
              shape="circle" 
              coords="191,251,31" 
              alt="dip1" 
              href=""
              onClick={(e) => imgClick(e, 2)}/>

            <area 
              shape="circle" 
              coords="296,148,20" 
              alt="dip2" 
              href=""
              onClick={(e) => imgClick(e, 2)}/>

            <area 
              shape="circle" 
              coords="384,104,23" 
              alt="dip3" 
              href=""
              onClick={(e) => imgClick(e, 2)}/>

            <area 
              shape="circle" 
              coords="486,129,22" 
              alt="dip4" 
              href=""
              onClick={(e) => imgClick(e, 2)}/>

            {selectedArea == 2 && 
              <div>
                <img className="Img-overlayAb" src={dip}/>
                <img className="Img-overlayAc" src={dipAc}/>
              </div>
            }

            <area 
              shape="circle" 
              coords="223,325,22" 
              alt="pip1" 
              href=""
              onClick={(e) => imgClick(e, 3)}/>

            <area 
              shape="circle" 
              coords="304,249,28" 
              alt="pip2" 
              href=""
              onClick={(e) => imgClick(e, 3)}/>

            <area 
              shape="circle" 
              coords="393,214,25" 
              alt="pip3" 
              href=""
              onClick={(e) => imgClick(e, 3)}/>

            <area 
              shape="circle" 
              coords="486,228,27" 
              alt="pip4" 
              href=""
              onClick={(e) => imgClick(e, 3)}/>

            <area 
              shape="circle" 
              coords="658,422,23" 
              alt="pip5" 
              href=""
              onClick={(e) => imgClick(e, 3)}/>

            {selectedArea == 3 && 
              <div>
                <img className="Img-overlayAb" src={pip}/>
                <img className="Img-overlayAc" src={pipAc}/>
              </div>
            } 
            <area
              shape="circle" 
              coords="262,417,33" 
              alt="mcp1" 
              href=""
              onClick={(e) => imgClick(e, 4)}/>

            <area 
              shape="circle" 
              coords="329,386,31" 
              alt="mcp2" 
              href=""
              onClick={(e) => imgClick(e, 4)}/>

            <area 
              shape="circle" 
              coords="404,364,31" 
              alt="mcp3" 
              href=""
              onClick={(e) => imgClick(e, 4)}/>

            <area 
              shape="circle" 
              coords="479,366,32" 
              alt="mcp4" 
              href=""
              onClick={(e) => imgClick(e, 4)}/>

            <area 
              shape="circle" 
              coords="592,535,29" 
              alt="mcp5" 
              href=""
              onClick={(e) => imgClick(e, 4)}/>

            {selectedArea == 4 && 
              <div>
                <img className="Img-overlayAb" src={mcp}/>
                <img className="Img-overlayAc" src={mcpAc}/>
              </div>
            }
          </map>
        </div>
      )
}