import './App.css';
import React, {useState} from 'react';

export function Sandwich() {
    let [mobileNavIsOpen, setMobileNavState] = useState(false);

    function sandwichDance() {
        let x = document.getElementById("mobile-sandwich");
        // let navOpened = false;
        // console.log("TEST");
        if (typeof x !== "undefined") {
            if (mobileNavIsOpen!=true) {
                x.classList.toggle("change");
                setMobileNavState(true);
                openMobileNav();
            }
            else {
                x.classList.toggle("change");
                setMobileNavState(false);
                closeMobileNav();
    
            }
            
        }
    }
    
    return(
        <div className='mobile-sandwich' id="mobile-sandwich" onClick={() => sandwichDance()}>
            <div className='mobile-sandwich-1'></div>
            <div className='mobile-sandwich-2'></div>
            <div className='mobile-sandwich-3'></div>
        </div>             
    );   
}




function openMobileNav(){
    document.getElementById("myNav").style.width = "40%";
    document.getElementById("root").style.marginLeft = "40%";

    console.log("nav was opened");
}

function closeMobileNav(){
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("root").style.marginLeft = "0%";

    console.log("nav was  closed");
}


// function showLinks(){
//     var x = document.getElementById("mobile-sandwich");
//     if (x.style.display === "flex") {
//         x.style.display = "none";
//     }
//     else {
//         x.style.display = "flex";
//     }
// }       