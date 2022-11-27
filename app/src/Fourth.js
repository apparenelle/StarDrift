import './App.css';
import React from 'react';
import nysJobLogo from './assets/nys.png';
import anaDataJobLogo from './assets/anadata.jpeg';
import sculptorJobLogo from './assets/sculptor.png';
import bayernlbJobLogo from './assets/bayernlb.jpeg';

export class Fourth extends React.Component{
    render(){
        return(
            <div className='fourth-sectional'>
                <h2>Experiences</h2>
                <div className='box-layout-flex-row-container-4-with_img'>
                    <a  className='experience-items-flex-container' href='#'>
                        <img className='experience-image' src={nysJobLogo}></img>
                        <div className='experience-label'><p>State of New York</p></div>
                    </a>
                    <a className='experience-items-flex-container' href='#'>
                        <img className='experience-image' src={sculptorJobLogo}></img>
                        <div className='experience-label'><p>Sculptor Capital Management</p></div>
                    </a>
                    <a className='experience-items-flex-container' href='#'>
                        <img className='experience-image' src={bayernlbJobLogo}></img>
                        <div className='experience-label'><p>Bayerische LandesBank</p></div>
                    </a>
                    <a className='experience-items-flex-container' href='#'>
                        <img className='experience-image' src={anaDataJobLogo}></img>
                        <div className='experience-label'><p>Ana Data Consulting</p></div>
                    </a>
                </div>
            </div>
        );
    }
}