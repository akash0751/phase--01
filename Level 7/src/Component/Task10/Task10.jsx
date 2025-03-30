import React from 'react'
import useGeolocation from './UseGeolocation';
const Task10 = () => {
    const { location, error } = useGeolocation();

    return (
      <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", maxWidth: "400px", margin: "auto" }}>
        <h2> Your Location</h2>
        {error ? (
          <p style={{ color: "red" }}>❌ {error}</p>
        ) : location ? (
          <p>
            <strong>Latitude:</strong> {location.latitude} <br />
            <strong>Longitude:</strong> {location.longitude} <br />
            <strong>Accuracy:</strong> {location.accuracy} meters
          </p>
        ) : (
          <p>Fetching location...</p>
        )}
      </div>
    );
  };

export default Task10