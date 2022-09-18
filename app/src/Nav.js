//import all images and documents and us js to call them.
import './App.css'
import companyLogo from './assets/generic_logo.jpeg';

function NavBar() {
    return(
        <div class="nav-flex-container">
            <div class="nav-logo-flex-container">
                <img class="nav-logo" src={companyLogo} />
            </div>
            
            <div class="nav-link-flex-container">
                <ul class="nav-links">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Donate</a></li>
                </ul>
            </div>           
        </div>
    );    
}




export default NavBar;