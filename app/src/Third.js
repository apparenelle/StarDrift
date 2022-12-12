import './App.css';
import React from 'react';

export class Third extends React.Component{
    render(){
        return(
            <div className='third-sectional'>
                <h2>My Masterpieces</h2>
                <div className='collective-projects-flex-container'>
                    <a className='projects-box-layout' href='#'>
                        <img className='projects-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                        <div className='projects-label'><p>Project 1</p></div>
                    </a>
                    <a className='projects-box-layout' href='#'>
                        <img className='projects-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                        <div className='projects-label'><p>Project 2</p></div>
                    </a>
                </div>
            </div>
        );
    }
}