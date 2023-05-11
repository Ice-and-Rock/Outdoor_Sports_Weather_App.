import React from "react";
import { useState, useEffect } from "react";

function GetWeather(props) {
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    async function getWeatherData() {
      const response = await fetch(
        // CHANGE - the API has been changed to be more simple
        `https://api.open-meteo.com/v1/forecast?latitude=${props.lat}&longitude=${props.long}&daily=temperature_2m_max,rain_sum,windspeed_10m_max&forecast_days=3&timezone=Europe%2FLondon`,
        { method: "GET", headers: { accept: "application/json" } }
      );
      const data = await response.json();
      setWeatherData(data);

      // TESTS // ----------------------------------------------
      console.log("testing", data);
      console.log("testing 2", data.daily.windspeed_10m_max[0]);
    }
    if (props.lat && props.long) {
      getWeatherData();
    }
  }, [props.lat, props.long]);

  return (
    <div>
      <h1>Area weather data</h1>

      {/* CHANGE - Changes the API data pathways */}
      {Object.keys(weatherData).length > 0 && 
      // gives back the key pairs of the array being returned
      ( <>
          <p> This is where the API data will go for now. </p>
          <p>
            Temperature:{" "}
            {weatherData.daily && weatherData.daily.temperature_2m_max[0]}°C
          </p>
          <p>Wind Speed km/h: {weatherData.daily.windspeed_10m_max[0]}</p>
          <p>Rain: {weatherData.daily.rain_sum[0]} mm</p>
        </>
      )}
    </div>
  );
}

export default GetWeather;
