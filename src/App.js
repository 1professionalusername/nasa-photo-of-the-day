import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=JOKttsNDn4qO47RXwsgVP5QcPNAiX5Ub51HrBcgd&date=2012-03-14')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  return (
    <div className="App">

      <h1>{data.title}</h1>
      <h3>{data.date}</h3>
      <img src={data.url} />
      <h3>{data.explanation}</h3>
    </div>
  );
}

export default App;
