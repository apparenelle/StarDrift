import './App.css';
import React from 'react';
import greetingPhoto from './assets/gerald.png';

export class First extends React.Component {
    render(){
        return (
            <div className='first-sectional'>
                <div className='photo-flex'>
                    <img className='photo-selfie' src={greetingPhoto} alt=""></img>
                </div>
                <div className='greeting-flex'>
                    <h1>I am Adrian</h1>
                    <h2>"Anyone can create but, only the fearless can be great."</h2>
                </div>
            </div>
        );
    }
}

