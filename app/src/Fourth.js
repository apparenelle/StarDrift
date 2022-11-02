import './App.css';
import React from 'react';
import nys from './assets/nys.png';

export class Fourth extends React.Component{
    render(){
        return(
            <div className='fourth-sectional'>
                <h2>Experiences</h2>
                <div className='box-layout-flex-row-container-4-with_img'>
                    <a  className='experience-items-flex-container' href='#'>
                        <img className='skills-trading-image' src={nys}></img>
                        <div className=''><p>State of New York</p></div>
                    </a>
                    <a className='experience-items-flex-container' href='#'>
                        <img className='' src=''></img>
                        <div className=''><p>Sculptor Capital Management</p></div>
                    </a>
                    <a className='experience-items-flex-container' href='#'>
                        <img className='' src=''></img>
                        <div className=''><p>Bayerische LandesBank</p></div>
                    </a>
                    <a className='experience-items-flex-container' href='#'>
                        <img className='' src=''></img>
                        <div className='experience-item-label'><p>Ana Data Consulting</p></div>
                    </a>
                </div>
            </div>
        );
    }
}