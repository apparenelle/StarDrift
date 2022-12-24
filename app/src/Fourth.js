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
                <div className='box-layout-flex-row-container'>
                    {/* You gotta swap the anchors for divs and see if that fixes it */}

                    <div  className='experience-items-flex-container'>
                        <img className='experience-image' src={nysJobLogo}></img>
                        <div className='experience-label'><p>State of New York</p></div>
                    </div>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={sculptorJobLogo}></img>
                        <div className='experience-label'><p>Sculptor Capital Management</p></div>
                    </div>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={bayernlbJobLogo}></img>
                        <div className='experience-label'><p>Bayerische LandesBank</p></div>
                    </div>
                    <div className='experience-items-flex-container'>
                        <img className='experience-image' src={anaDataJobLogo}></img>
                        <div className='experience-label'><p>Ana Data Consulting</p></div>
                    </div>
                </div>
            </div>
        );
    }
}



// <div className='fourth-sectional'>
//                 <h2>Experiences</h2>
//                 <div className='box-layout-flex-row-container-4-with-img'>
//                     {/* You gotta swap the anchors for divs and see if that fixes it */}

//                     <div  className='experience-items-flex-container'>
//                         {/* <div className='experience-image-container'>
//                             <img className='experience-image' src={nysJobLogo}></img>
//                         </div>
//                         <div className='experience-label-container'>
//                             <div className='experience-label'><p>State of New York</p></div>
//                         </div> */}
//                     </div>
//                     <div className='experience-items-flex-container'>
//                         <img className='experience-image' src={sculptorJobLogo}></img>
//                         <div className='experience-label'><p>Sculptor Capital Management</p></div>
//                     </div>
//                     <div className='experience-items-flex-container'>
//                         <img className='experience-image' src={bayernlbJobLogo}></img>
//                         <div className='experience-label'><p>Bayerische LandesBank</p></div>
//                     </div>
//                     <div className='experience-items-flex-container'>
//                         <img className='experience-image' src={anaDataJobLogo}></img>
//                         <div className='experience-label'><p>Ana Data Consulting</p></div>
//                     </div>
//                 </div>
//             </div>