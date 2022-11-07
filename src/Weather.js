import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import CelToFeir from "./CelToFeir";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [currentCity, setCurrentCity] = useState("");
  let [time, setTime] = useState(null);
  let [ready, setReady] = useState(false);
  let [condition, setCondition] = useState(null);
  let [conditionIcon, setConditionIcon] = useState(null);
  let [temp, setTemp] = useState(null);
  let [feelsLike, setFeelsLike] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setCity(response.data.city);
    setTime(response.data.time * 1000);
    setCondition(response.data.condition.description);
    setConditionIcon(response.data.condition.icon_url);
    setTemp(response.data.temperature.current);
    setFeelsLike(response.data.temperature.feels_like);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ce24471d03dca09t3f6f930b11e93o5e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function onCityChange(event) {
    setCurrentCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 bckgrnd">
              <input
                type="search"
                placeholder="Enter a city here"
                className="form-control"
                autoFocus="on"
                onChange={onCityChange}
              />
            </div>
            <div className="col-3 bckgrnd">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1 className="city-name bckgrnd">{city}</h1>
        <ul className="basic-info">
          <li>
            <FormattedDate date={time} />
          </li>
          <li className="condition">{condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={conditionIcon} alt="Cloudy" />
            <CelToFeir celsius={Math.round(temp)} />
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
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
