//import all images and documents and us js to call them.
import './App.css'
import companyLogo from './assets/aeydran_animated.png';
import React from 'react';
import {NewsLetter} from './News.js';
//import ReactDOM from 'react-dom/client';

function NavBar() {
    return(
        <div className="upper-sectional">
            <div className="nav-flex-container">
                <div className="nav-logo-flex-container">
                    <img className="nav-logo" src={companyLogo} alt="Adrian's Logo" />
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
                    <NewsLetter text="This is the fucking news"/>
                </div>
                
            </div>
        </div>  
    );
}

// function grabNews() {
//     const title = React.createElement('p', {}, 'This is the news');
//     document.getElementById("news-drop").appendChild(title)
//     console.log("News was called");
//     const news = React.createElement("p");
//     news.innerText = "This is the news";
//     React.getElementsById("news-drop").appendChild(news);
// }




export default NavBar;