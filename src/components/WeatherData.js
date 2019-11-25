import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD, 
    CLOUDY,
    SUN, 
    RAIN,
    SNOW,
    WINDY
}from './../constants/weathers';


const icons = {
  [CLOUD]:"cloud",
  [CLOUDY]:"cloudy",
  [SUN]:"day-sunny",
  [RAIN]:"rain",
  [SNOW]:"snow",
  [WINDY]:"windy"
};

const WeatherData = () => {
  return  <div>
        <WeatherTemperature 
         temperature={20}
         weatherState={CLOUDY}/>
        <WeatherExtraInfo  
        humidity={80} 
        wind={"10 m/s"}/>
    </div>
};

export default WeatherData;