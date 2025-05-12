import React from 'react'


const WeatherDet = ({ icon, temp, humidity, wind, lat, log,text, country }) => {
  return (
    <>
      <img src={icon} alt="Weather Icon" className="weather-icon" /><br></br>
      <div><h1 style={{fontWeight:'bold'}}>{text}</h1></div>
      <div>{country}</div>
      <div className="temp">{temp}°C</div>

      <div className="info-box">
        <div className="info-item">
          <p>Humidity</p>
          <strong>{humidity}%</strong>
        </div>
        <div className="info-item">
          <p>Wind</p>
          <strong>{wind} km/h</strong>
        </div>
      </div>

      <div className="info-box">
        <div className="info-item">
          <p>Latitude</p>
          <strong>{lat}</strong>
        </div>
        <div className="info-item">
          <p>Longitude</p>
          <strong>{log}</strong>
        </div>
      </div>
      <div>
        <p>Designed by Akash</p>
      </div>
      
</>
  );
};

export default WeatherDet;
