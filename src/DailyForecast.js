import axios from "axios";
import React, { useState } from "react";

export default function DailyForecast() {
  function handleResponse(response) {
    console.log(response.data.daily);
  }
    
    let apiKey = `ce24471d03dca09t3f6f930b11e93o5e`;
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=${apiKey}&units=metric`;
   
    axios.get(apiForecastUrl).then(handleResponse);
    
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Wed</div>
          <div className="forecastIcon">☀️</div>
          <div className="maxMinTemp">
            <span className="maxTemp">20º</span>
            <span className="minTemp">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Wed</div>
          <div className="forecastIcon">☀️</div>
          <div className="maxMinTemp">
            <span className="maxTemp">20º</span>
            <span className="minTemp">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Wed</div>
          <div className="forecastIcon">☀️</div>
          <div className="maxMinTemp">
            <span className="maxTemp">20º</span>
            <span className="minTemp">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Wed</div>
          <div className="forecastIcon">☀️</div>
          <div className="maxMinTemp">
            <span className="maxTemp">20º</span>
            <span className="minTemp">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Wed</div>
          <div className="forecastIcon">☀️</div>
          <div className="maxMinTemp">
            <span className="maxTemp">20º</span>
            <span className="minTemp">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
