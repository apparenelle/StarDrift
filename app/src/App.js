import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my digital portfolio!</h1>
      <h2>It is {new Date().toLocaleTimeString()} in New York!</h2>
    </div>
  );

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<h1>Hello, world!</h1>);
}

export default App;
