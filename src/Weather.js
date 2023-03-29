import React from "react";

import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "London ",
    temperature: "18",
    description: "Partly Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li> </li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.imgUrl}
              alt="Cloudy icon"
              className="weather-icon float-left"
            />
            <div className="float-left">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">
                °C | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
    

  );
}
<div>
<footer> This was coded by Christine Jones and hosted on <a href="/">Github</a></footer></div>
