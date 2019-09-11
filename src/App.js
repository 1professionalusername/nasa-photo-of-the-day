import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [data, setData] = useState('Hi')

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        {/* <App data={data} /> */}
      </p>
    </div>
  );
}

export default App;
