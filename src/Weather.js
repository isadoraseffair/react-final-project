import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather () {

  let [city, setCity] = useState(null);
  let [ready, setReady] = useState (false);
  let [condition, setCondition] = useState (null);
  let [conditionIcon, setConditionIcon] = useState (null);
  let [temp, setTemp] = useState (null);
  let [feelsLike, setFeelsLike] =useState (null);
  let [humidity, setHumidity] = useState (null);
  let [wind, setWind] = useState (null);
  
  function handleResponse (response){
    setCity(response.data.city);
    setCondition(response.data.condition.description);
    setConditionIcon (response.data.condition.icon_url);
    setTemp (response.data.temperature.current);
    setFeelsLike (response.data.temperature.feels_like);
    setHumidity(response.data.temperature.humidity);
    setWind (response.data.wind.speed);
    console.log(response);
    setReady (true);
  }
  
if (ready){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city here"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1 className="city-name">{city}</h1>
      <ul className="basic-info">
        <li>Wednesday</li>
        <li className="condition">{condition}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={conditionIcon} alt="Cloudy" />
          <span className="temp">{Math.round(temp)}</span>
          <span className="tempUnit">ºC</span>
        </div>
        <div className="col-6">
          <ul className="added-info">
            <li>Feels Like: {Math.round(feelsLike)}ºC</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {Math.round(wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
  let apiKey = "ce24471d03dca09t3f6f930b11e93o5e";
  let city = "Lisbon"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
axios.get(apiUrl).then(handleResponse); 
   return "Loading...";
}
} 