import Bar from './Nav.js';
import {First} from './First.js';
import {Second} from './Second.js';
import {Third} from './Third.js';
import {Fourth} from './Fourth.js';
import {Footer} from './Footer.js';
import './App.css';
import './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'
import React, { useState, useEffect } from 'react';

function App() {
  let width = window.innerWidth;
  let mobileWidth = 1080; //in pixels swaps website over to mobile
  let isMobile = undefined;
  
  if (width < mobileWidth) {
    isMobile = true;
  }
  else {
    isMobile = false;
  }

  //use State could go here
  const [mobileState, setIsMobile] = useState(isMobile);

  console.log(`This is initial width: ${width}px. Mobile: ${isMobile}.`);


  useEffect(() => {
    window.addEventListener("resize", () =>{
      width = window.innerWidth;
      if(width<mobileWidth)
      {
        isMobile=true;
      }
      else
      {
        isMobile=false
      }
      console.log(`Window width is ${width}px. Are we in mobile mode: ${isMobile}.`); 
      setIsMobile(isMobile);
      // sleep(500);  //only use to slow down in production if necessary
    });
  }, [width, isMobile]);
  return ( 
    <div className="App" id='app'>
      <Bar isMobile={mobileState} />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </div>
  );
}

function sleep(ms) {
  // console.log("I slept"); works -- supposed to slow down render calls
  // use just in case too many calls are occuring
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default App;
