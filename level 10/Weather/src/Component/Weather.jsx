import React, { useEffect, useState } from 'react'
import WeatherDet from './WeatherDet'
import sunImg from '../assets/sunImg.png'
import secondD from '../assets/02d.png'
import thirdD from '../assets/03d.png'
import fourthD from '../assets/04d.png'
import ninthD from '../assets/09d.png'
import tenthD from '../assets/10d.png'
import elevenD from '../assets/11d.png'
import thirteenD from '../assets/13d.png'
import fiftyD from '../assets/50d.png'

const Weather = () => {
    const [icon, setIcon] = useState()
    const [temp, setTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [wind, setWind] = useState(0)
    const [lat, setLat] = useState(0)
    const [log, setLog] = useState(0)
    const [text, setText] = useState('Chennai')
    const [country, setCountry] = useState('IN')
    const [search1, setSearch] = useState('chennai')
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const weatherIconMap = {
      "01d":sunImg,
      "01n":sunImg,
      "02d":secondD,
      "02n":secondD,
      "03d":thirdD,
      "03n":thirdD,
      "04d":fourthD,
      "04n":fourthD,
      "09d":ninthD,
      "09n":ninthD,
      "10d":tenthD,
      "10n":tenthD,
      "11d":elevenD,
      "11n":elevenD,
      "13d":thirteenD,
      "13n":thirteenD,
      "50d":fiftyD,
      "50n":fiftyD
    }

    const search = async () =>{
        setLoading(true)
        // setNotFound(true)
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${search1}&appid=5ca51c0907e86ca7f54e8959432f145d&units=Metric`
     try{
       let response = await fetch(url)
       let data = await response.json()
       console.log(data)

       setHumidity(data.main.humidity)
       setWind(data.wind.speed)
       setCountry(data.sys.country)
       setLat(data.coord.lat)
       setLog(data.coord.lon)
       setTemp(data.main.temp)
       setText(data.name)
       const weatherIconCode = data.weather[0].icon;
       setIcon(weatherIconMap[weatherIconCode] || sunImg)
      setNotFound(false)
      
     }catch(error){
         setNotFound(true)
        console.log(error.message)
        
        return
     }finally{
        setLoading(false)
     }
    }

    

    const handleChange = (e) =>{
      setSearch(e.target.value);
      if(e==='enter')
      search();
    }

    const handleButton = (e) =>{
        e.preventDefault()
        search()
    }

    useEffect (()=>{
      search()
    },[])
  return (
    <>
    
    <div className="weather-card">
    
      <div className="input-container">
        <input type="text" placeholder="Enter city..." 
        onChange={handleChange}

        value={search1} />
        <button onClick={handleButton}>Search</button>
      </div>
      {loading && <div>Loading...</div>}
      {notFound && <div>Not Found</div>}
        {!loading && !notFound && <WeatherDet icon={icon}
         temp={temp}
          humidity={humidity}
          wind={wind}
          lat={lat}
          log={log}
          text={text}
          country={country} />}
        <div className="forecast-container">
   
</div>

    </div>
    
    </>
  )
}

export default Weather