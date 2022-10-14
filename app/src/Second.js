import './App.css';
import React from 'react';

export class Second extends React.Component{
    render(){
        return(
            <div className='second-sectional'>
                {/* Configured only for four sub-elements to be visually displayed */}
                <h2>Passions</h2>
                <div className='collective-skills-flex-container'>
                    {/* skills-flex-container is also a flex item */}
                        <a href='#' className='skill-box-layout' id='skills-trading'>
                            <img className='skills-trading-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                            <div className='skills-trading-label'><p>Trading</p></div>
                        </a>
                        
                        
                        <a className='skill-box-layout' id='skills-coding' href='#'>
                            <img className='skills-coding-image' src='https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy-downsized-large.gif'></img>
                            <div className='skills-coding-label'><p>Coding</p></div>
                        </a>

                        <a className='skill-box-layout' href='#'>
                            <img className='skills-engineering-image' src='https://media.giphy.com/media/3oEduKi6hUgSVAay4M/giphy.gif'></img>
                            <div className='skills-engineering-label'><p>Engineering</p></div>
                        </a>
                        <a className='skill-box-layout' href='#'>
                            <img className='skills-photography-image' src='https://media.giphy.com/media/26gshn9NXKOMrnysU/giphy.gif'></img>
                            <div className='skills-photography-label'><p>Photography</p></div>
                        </a>
                </div>

            </div>
        );
    }
}