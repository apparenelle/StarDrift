import logo from './logo.svg';
import Bar from './Nav.js';
import {First} from './First.js';
import {Second} from './Second.js';
import {Third} from './Third.js';
import {Fourth} from './Fourth.js';
import {Footer} from './Footer.js';
import './App.css';
import './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'

function App() {
  return ( 
    <div className="App">
      <Bar/>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />

      {/* <h1>Welcome to my digital portfolio!</h1>
      <h2>It is {new Date().toLocaleTimeString()} in New York!</h2> */}
    </div>
  );

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<h1>Hello, world!</h1>);
}

export default App;
