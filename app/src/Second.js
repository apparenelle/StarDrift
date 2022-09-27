import './App.css';
import React from 'react';

export class Second extends React.Component{
    render(){
        return(
            <div className='second-sectional'>
                <h2>Skills</h2>
                <div className='skills-flex-container'>
                    <div className='skills-flex-item'>
                        <button>Trading</button>
                        <button>Coding</button>
                        <button>Engineering</button>
                        <button>Photography</button>
                    </div>
                </div>

            </div>
        );
    }
}