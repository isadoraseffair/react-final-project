import React, { useState } from "react";


export default function CelToFeir (props) {
    const [unit, setUnit] = useState("celsius");
    
    function convertToF(event) {
      event.preventDefault();
      setUnit ("fahrenheit")
    }

    function convertToC(event) {
      event.preventDefault();
      setUnit("celsius");
    }
    
    if (unit === "celsius"){
   return(
        <span>
            <span className="temp">{Math.round(props.celsius)}</span>
            <span className="tempUnit">ºC | <a href="/" onClick={convertToF}>ºF</a> </span>
        </span>
   )
} else {
    let fahrenheit = (props.celsius * 9)/5 +32
    return (
      <span>
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="tempUnit">
          <a href="/" onClick={convertToC}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </span>
    );
}
}