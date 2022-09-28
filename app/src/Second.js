import './App.css';
import React from 'react';

export class Second extends React.Component{
    render(){
        return(
            <div className='second-sectional'>
                <h2>Skills</h2>
                <div className='skills-flex-container'>
                    <div className='skills-flex-item'>
                        <a href='#'>Trading</a>
                        <a href='#'>Coding</a>
                        <a href='#'>Engineering</a>
                        <a href='#'>Photography</a>
                    </div>
                </div>

            </div>
        );
    }
}