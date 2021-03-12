import React, { useState } from "react";
import Conditions from "../conditions/Conditions";
import classes from "./Forecast.module.css";
const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("metric");
  let [responseObj, setResponseObj] = useState({});
  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "20f38e93abmsh49b69d4c3908ef0p17bf3bjsnaa13fc9f2496",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  }

  return (
    <div>
      <h2>Find Current Weather Condition </h2>

      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.TextInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celsius
        </label>
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>

        <button className={classes.Button} type="submit">
          Get Forecast
        </button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
