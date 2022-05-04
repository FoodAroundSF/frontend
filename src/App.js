import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect } from 'react';

function App() {
  const callApi = async()=>{
    axios.get("http://222.114.141.188:5000/api").then((res)=>{
      console.log('axios')
      console.log(res.data);
      console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hidasd  
        </a>
      </header>
    </div>
  );
}

export default App;
