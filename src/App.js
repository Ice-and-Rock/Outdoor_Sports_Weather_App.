// import image1 from './../public/picture Lake District.jpeg'
import "./App.css";
import GetWeather from "./components/api";
import { useState } from "react";
import imageLakes from "./images/picture Lake District.jpeg";
import imageWales from "./images/picture North Wales.jpeg";
import imageHighlands from "./images/picture Highlands.jpeg";
import imageDales from "./images/picture Yorkshire Dales.jpeg";

function App() {
  const [lat, setLat] = useState(54.43);
  const [long, setLong] = useState(-2.96);

  function handleClick(lat, long) {
    setLat(lat);
    setLong(long);
  }

  // function handleClick(event) {
  //   const latitude = event.target.getAttribute("data-lat");
  //   const longitude = event.target.getAttribute("data-long");

  //   console.log("Clicked!");
  //   console.log(latitude, longitude);

  //   setLat(latitude);
  //   setLong(longitude);
  // }

  return (
    <div className="App">
      <h1>Outdoor Activity Forecasting</h1>
      <div className="container">
        <div className="containerItem">
          Lake District
          <img
            src={imageLakes}
            alt="the lakes"
            className="images"
            onClick={() => handleClick(54.43, -2.96)}
            // onClick={handleClick}
            // data-lat="54.43"
            // data-long="-2.96"
          />
        </div>

        <div className="containerItem">
          North Wales
          <img
            src={imageWales}
            alt="North Wales"
            className="images"
            onClick={() => handleClick(53.12, -4.13)}
            // onClick={handleClick}
            // data-lat="53.12"
            // data-long="-4.13"
          />
        </div>
        <div className="containerItem">
          Highlands
          <img
            src={imageHighlands}
            alt="the Highlands"
            className="images"
            onClick={() => handleClick(56.82, -5.11)}
            // onClick={handleClick}
            // data-lat="56.82"
            // data-long="-5.11"
          />
        </div>
        <div className="containerItem">
          Yorkshire Dales
          <img
            src={imageDales}
            alt="the Dales"
            className="images"
            onClick={() => handleClick(54.07, -2.28)}
            // onClick={handleClick}
            // data-lat="54.07"
            // data-long="-2.28"
          />
        </div>
      </div>
      <GetWeather lat={lat} long={long} />
    </div>
  );
}

export default App;
