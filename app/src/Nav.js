//import all images and documents and us js to call them.
import './App.css'
import companyLogo from './assets/generic_logo.jpeg';
import React from 'react';
import ReactDOM from 'react-dom/client';



function NavBar() {
    return(
        <div className="upper-sectional">
            <div className="nav-flex-container">
                <div className="nav-logo-flex-container">
                    <img className="nav-logo" src={companyLogo} />
                </div>
                
                <div className="nav-link-flex-container">
                    <ul className="nav-links">
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>About Me</a></li>
                        <li><a href='#'>Donate</a></li>
                    </ul>
                </div>           
            </div>
            <div className="nav-news-container" id="news-drop" onLoad={grabNews()}>

            </div>
        </div>  
    );
}

function grabNews() {
    // console.log("News was called");
    // const news = React.createElement("p");
    // news.innerText = "This is the news";
    // React.getElementsById("news-drop").appendChild(news);
}




export default NavBar;