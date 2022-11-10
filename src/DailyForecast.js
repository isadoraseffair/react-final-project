import axios from "axios";
import React, { useState } from "react";
import DetailForecast from "./DetailForecast";

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
          {forecast.map(function(dailyForecast,index) {
            if (index >0 && index <6) {
                return (
               <div className="col" key={index}>
            <DetailForecast data={dailyForecast} />
          </div>
            );
            }
          
          })};
        </div>
      </div>
    );
  } else {
    let apiKey = `ce24471d03dca09t3f6f930b11e93o5e`;
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=${apiKey}&units=metric`;

    axios.get(apiForecastUrl).then(handleResponse);

    return null;
  }
}
