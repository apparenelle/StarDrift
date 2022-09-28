import './App.css';
import React from 'react';
import greetingPhoto from './assets/gerald.png';

export class First extends React.Component {
    render(){
        return (
            <div className='first-sectional'>
                <div className='photo-flex'>
                    <img className='photo-selfie' src={greetingPhoto} alt="Picture of Adrian"></img>
                </div>
                <div className='greeting-flex'>
                    <h3>I am Adrian</h3>

                </div>
            </div>
        );
    }
}

