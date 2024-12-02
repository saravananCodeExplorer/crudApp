import React from 'react';
import './App.css';
import { useEffect ,useState} from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    fetchData();

  },[])

  const fetchData = async()=>{
    const response = await axios.get("http://localhost:8080/Employee")
    console.log(response.data)
  }
  return (
    <div className="App">
   <h1>header</h1>

  </div>
  );
}

export default App;
