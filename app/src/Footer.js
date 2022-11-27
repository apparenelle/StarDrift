import './App.css';
import React from 'react';

export class Footer extends React.Component{
    render(){
        return(
            <div className='footer-sectional'>
                <h2>Contact Me</h2>
                <div className='footer-links-flex'>
                    <a href='mailto:aeydran@gmail.com' >Email</a>
                    <a href='https://www.linkedin.com/in/adrian-francis-a0aa39181/' target={"_blank"}>LinkedIn</a>
                    <a href='https://github.com/apparenelle' target={"_blank"}>Github</a>
                </div>
            </div>
        );
    }
}