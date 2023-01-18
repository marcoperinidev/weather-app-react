import React, {useState} from 'react';
import axios from 'axios';

function App() {

  //const url =`https://api.openweathermap.org/data/2.5/weather?q=trieste&appid={{process.env.REACT_APP_API_KEY}}`

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Trieste</p>
          </div>
          <div className="temp">
            <h1>8°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>6°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>87%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>5 Km/h</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
