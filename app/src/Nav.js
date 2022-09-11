//import all images and documents and us js to call them.
import './App.css'
import companyLogo from './assets/generic_logo.jpeg';

function NavBar() {
    return(
        <div className="nav">
            <img src={companyLogo} />

            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>About Me</a></li>
                <li><a href='#'>Donate</a></li>
            </ul>
        </div>
    );    
}




export default NavBar;