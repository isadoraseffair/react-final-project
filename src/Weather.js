import React from "react";
import "./Weather.css";

export default function Weather () {
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
              <input type="submit" 
              value="Search" 
              className="btn btn-primary w-100" />
            </div>
          </div> 
        </form>
        <h1 className="city-name">New York</h1>
        <ul className="basic-info">
          <li>Wednesday</li>
          <li>Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
            />
            <span className="temp">6</span>
            <span className="tempUnit">ºC</span>
          </div>
          <div className="col-6">
            <ul className="added-info">
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}