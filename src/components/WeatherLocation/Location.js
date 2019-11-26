import React from 'react';
import PropTypes from 'prop-types';

const Location = (/*props*/ {city}) => {

    //Destructuring
    //const {city} = props;

    //asignacion de variable comun
    //const city = props.city;

   return (<div><h1>{ city }</h1></div>);
};

Location.propTypes = {
    city:PropTypes.string.isRequired,
}

export default Location;