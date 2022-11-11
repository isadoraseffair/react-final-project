import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailForecast from "./DetailForecast";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    console.log("Setei pra true loaded");
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          {forecast?.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <DetailForecast data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `ce24471d03dca09t3f6f930b11e93o5e`;
    let lon = props.coord.longitude;
    let lat = props.coord.latitude;
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    console.log(apiForecastUrl);
    axios.get(apiForecastUrl).then(handleResponse);

    return null;
  }
}
