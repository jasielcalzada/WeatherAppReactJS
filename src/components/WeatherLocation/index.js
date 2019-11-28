import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './../WeatherLocation/WeatherData/styles.css'

const WeatherLocation = () => {
  return  <div className="weatherLocationCont">
        <Location city = {"Tijuana BC."}/>
        <WeatherData/>
    </div>
};

export default WeatherLocation;