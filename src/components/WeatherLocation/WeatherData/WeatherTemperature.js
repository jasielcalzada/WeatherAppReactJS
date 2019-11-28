import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
/*import {
    CLOUD, 
    CLOUDY,
    SUN, 
    RAIN,
    SNOW,
    WINDY
}from './../../../constants/weathers';*/
import './styles.css';

const icons = {
    cloud:"cloud",
    cloudy:"cloudy",
    sun:"day-sunny",
    rain:"rain",
    snow:"snow",
    windy:"windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    if(icon)
        return  <WeatherIcons className="wicon" name={icon} size="2x"/>
    else
        return  <WeatherIcons className="wicon" name={"day-sunny"} size="2x"/>
}

const WeatherTemperature = ({temperature,weatherState}) => {
    return (
        <div className="WeatherTemperatureCont">
            {getWeatherIcon(weatherState)}
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{`C`}</span>
        </div>);
};

WeatherTemperature.propTypes= {
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
};

export default WeatherTemperature;