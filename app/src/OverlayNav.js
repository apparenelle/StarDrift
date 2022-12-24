import './App.css';
import React from 'react';
// import { Sandwich } from './Sandwich';

export class OverlayNav extends React.Component{
    render(){
        return(
            <div className="overlay" id='myNav'>
                <div className="overlay-content">
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                    <a href="#">Passions</a>
                </div>
            </div>
 
        );
    }
}
