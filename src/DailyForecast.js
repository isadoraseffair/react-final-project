import axios from "axios";
import React, { useState } from "react";

export default function DailyForecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="forecastDay">{(forecast[0].temperature.day)}</div>
            <div>
              <img
                src={forecast[0].condition.icon_url}
                alt="iconImg"
                className="forecastIcon"
              ></img>
            </div>
            <div className="maxMinTemp">
              <span className="maxTemp">
                {Math.round(forecast[0].temperature.maximum)}º
              </span>
              <span className="minTemp">
                {Math.round(forecast[0].temperature.minimum)}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `ce24471d03dca09t3f6f930b11e93o5e`;
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=${apiKey}&units=metric`;

    axios.get(apiForecastUrl).then(handleResponse);
  }
}
