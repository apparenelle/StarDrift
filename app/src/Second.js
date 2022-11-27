import './App.css';
import React from 'react';

export class Second extends React.Component{
    render(){
        return(
            <div className='second-sectional'>
                {/* ^^^Configured only for four sub-elements to be visually displayed */}
                <h2>Passions</h2>
                <div className='collective-passions-flex-container'>
                    {/* skills-flex-container is also a flex item */}
                        <a href='#' className='passion-box-layout'>
                            <img className='passion-image' src='https://media.giphy.com/media/1569RvwRjejO2IcueA/giphy-downsized-large.gif'></img>
                            <div className='passion-label'><p><b>Trading</b></p></div>
                        </a>
                        
                        <a className='passion-box-layout'href='#'>
                            <img className='passion-image' src='https://media.giphy.com/media/wwg1suUiTbCY8H8vIA/giphy-downsized-large.gif'></img>
                            <div className='passion-label'><p><b>Coding</b></p></div>
                        </a>

                        <a className='passion-box-layout' href='#'>
                            <img className='passion-image' src='https://media.giphy.com/media/3oEduKi6hUgSVAay4M/giphy.gif'></img>
                            <div className='passion-label'><p><b>Engineering</b></p></div>
                        </a>
                        <a className='passion-box-layout' href='#'>
                            <img className='passion-image' src='https://media.giphy.com/media/26gshn9NXKOMrnysU/giphy.gif'></img>
                            <div className='passion-label'><p><b>Photography</b></p></div>
                        </a>
                </div>

            </div>
        );
    }
}