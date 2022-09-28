import './App.css';
import React from 'react';

export class Footer extends React.Component{
    render(){
        return(
            <div className='footer-sectional'>
                <h2>Contact Me</h2>
                <a href='mailto:aeydran@gmail.com'>Email</a>
                <a href='https://www.linkedin.com/in/adrian-francis-a0aa39181/'>LinkedIn</a>
                <a href='https://github.com/apparenelle'>Github</a>

                <h4></h4>
            </div>
        );
    }
}