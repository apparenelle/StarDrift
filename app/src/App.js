import logo from './logo.svg';
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
  let isMobile = undefined;
  
  if(width<900) {
    isMobile = true;
  }
  else {
    isMobile = false;
  }

  //use State could go here
  

  console.log(`This is initial width: ${width}px. Mobile: ${isMobile}.`);
  useEffect(() => {
    window.addEventListener("resize", () =>{
      width = window.innerWidth;
      if(width<900)
      {
        isMobile=true;
      }
      else
      {
        isMobile=false
      }
      console.log(`Window width is ${width}px. Are we in mobile mode: ${isMobile}.`); 
      // sleep(500);  
    });
  }, [width, isMobile]);
  return ( 
    <div className="App">
      <Bar marker={isMobile}/>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />

      {/* <h1>Welcome to my digital portfolio!</h1>
      <h2>It is {new Date().toLocaleTimeString()} in New York!</h2> */}
    </div>
  );
}

function sleep(ms) {
  // console.log("I slept"); works -- supposed to slow down render calls
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default App;
