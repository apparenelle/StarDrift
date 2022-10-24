import './App.css';
import React from 'react';

export class Third extends React.Component{
    render(){
        return(
            <div className='third-sectional'>
                <h2>My Masterpieces</h2>
                <div className='projects-items-flex-container'>
                    {/* skills-flex-container is also a flex item */}
                    <a href='#' className='skill-box-layout'>
                        <img className='' src=''></img>
                        <div className=''><p>Project 1</p></div>
                    </a>
                    
                    
                    <a className='skill-box-layout' href='#'>
                        <img className='' src=''></img>
                        <div className=''><p>Project 2</p></div>
                    </a>
                </div>
            </div>
        );
    }
}