//import all images and documents and us js to call them.
import './App.css'
// import companyLogo from './assets/aeydran_animated.png';
import React from 'react';
import {NewsLetter} from './News.js';
//import ReactDOM from 'react-dom/client';

function NavBar() {
    // if (window.innerWidth>1024){
    //     console.log("big");
    // }
    return(
        <div className="upper-sectional">
            <div className="nav-flex-container">
                <div className="nav-logo-flex-container">
                    <h4>Aeydran</h4>
                </div>  
                <div className="nav-link-flex-container">
                    <ul className="nav-links">
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>About Me</a></li>
                        <li><a href='#'>Skills</a></li>
                    </ul>
                </div>           
            </div>
            <div className="nav-news-container">
                <div className='nav-news'>
                    <NewsLetter text="This is what I've been up to."/>
                </div>
                
            </div>
        </div>  
    );
}

export default NavBar;