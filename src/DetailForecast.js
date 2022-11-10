import React, { useState } from "react";

export default function DetailForecast (props) {
    
    function day() {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    }
    
    return (
      <div>
        <div className="forecastDay">{day()}</div>
        <div>
          <img
            src={props.data.condition.icon_url}
            alt="iconImg"
            className="forecastIcon"
          ></img>
        </div>
        <div className="maxMinTemp">
          <span className="maxTemp">
            {Math.round(props.data.temperature.maximum)}º
          </span>
          <span className="minTemp">
            {Math.round(props.data.temperature.minimum)}º
          </span>
        </div>
      </div>
    );
};