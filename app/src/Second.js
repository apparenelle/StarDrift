import './App.css';
import React from 'react';

export class Second extends React.Component{
    render(){
        return(
            <div className='second-sectional'>
                <h2>Skills</h2>
                <div className='skills-flex-container'>
                    {/* skills-flex-container is also a flex item */}
                        <a href='#'>
                            <img className='skills-trading-image'></img>
                            <div className='skills-trading-label'><h5>Trading</h5></div>
                        </a>
                        
                        
                        
                        <a id='skills-coding' href='#'>Coding</a>
                        <a id='skills-engineering' href='#'>Engineering</a>
                        <a id='skills-photography' href='#'>Photography</a>
                </div>

            </div>
        );
    }
}