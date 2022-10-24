import './App.css';
import React from 'react';

export class Fourth extends React.Component{
    render(){
        return(
            <div className='fourth-sectional'>
                <div className='fourth-sectional-row-flex'>
                    <h2>Skills</h2>
                    <div className='skills-box-layout-flex-container'>
                        <a>Skill 1</a>
                        <a>Skill 2</a>
                        <a>Skill 3</a>
                        <a>Skill 4</a>
                    </div>
                </div>
            </div>
        );
    }
}