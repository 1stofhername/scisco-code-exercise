import logo from './logo.svg';
import { useEffect, useState } from 'react';
import DataContainer from './DataContainer';
import './App.css';

function App() {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch("https://www.ebi.ac.uk/cgi-bin/ipd/api/allele?limit=1000")
    .then((r)=> r.json())
    .then((data)=>console.log(data));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <DataContainer />
    </div>
  );
}

export default App;
