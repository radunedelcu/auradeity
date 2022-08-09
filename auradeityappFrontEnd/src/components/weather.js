import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { couldStartTrivia } from 'typescript';
import '../weather.css';


  function Weather(){

    const handleCityChange = (value) =>
    {
      setCity(value);
      
    }
const [city, setCity] = useState('');
const [data, setData] = useState('');
const [weatherdataResult, setweatherdataResult] = useState({
  city: 'Ploieşti',
  country: 'Ro',
  description: 'scattered clouds',
  temperature : 30.95,
  windspeed : 4.23,
  feelsLike : 30,
  humidity : 19,
})
const url = 'https://localhost:7113/api/weather/current' 
async function searchLocation(event){
    const weatherdata = {
       city: city,
    }

    if(event.key === 'Enter'){
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json",
      'Accept': "application/json",
    },
    body: JSON.stringify(weatherdata)
})
.then((response) => response.json())
    .then((response) => {
        setweatherdataResult({
          city:response.city,
          country: response.country,
          description: response.description,
          temperature: response.temperature,
          windSpeed: response.windSpeed,
          feelsLike: response.feelsLike,
          humidity: response.humidity,
        })
        console.log(response)

    }).catch((error) => {
        console.log(error)
      });
}
}

    return(
<div className="weather">
    <div className="search">
        <input
        value={city}
        onChange={(e) => handleCityChange(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
    </div>
  <div className="container2">
    <div className="top">
        <div className="location">
          <p className='weatherP'>{weatherdataResult.country} {weatherdataResult.city}</p>
        </div>
        <div className="temp">
          <p className='weatherP'>{weatherdataResult.temperature} °C</p>
        </div>
        <div className="description">
          <p className='weatherP'>{weatherdataResult.description} </p>
        </div>
    </div>
    <div className="bottom">
        <div className="feels">
            <p className='bold'>{weatherdataResult.feelsLike}°C</p>
            <p className='weatherP'>Feels Like</p>
        </div>
        <div className="humidity">
            <p className="bold">{weatherdataResult.humidity}%</p>
            <p className='weatherP'>Humidity</p>
        </div>
        <div className="wind">
            <p className="bold">{weatherdataResult.windSpeed} mph</p>
            <p className='weatherP'>Wind Speed</p>
        </div>
    </div>
  </div>
</div>


    )}

    export default Weather;
