
import React from 'react';
const imgUrlBase = 'http://openweathermap.org/img/wn/';

const HourlyForecastItem = ({ date, temperature, icon, descriptions }) => (
        
    <li className="hourly-item  d-flex flex-column justify-content-center align-items-center p-3 pt-4 pb-4 mb-3" >
       <span className="hourly-hour mb-2">{date}</span>
       <img className="mb-2" width="30" src={`${imgUrlBase}/${icon}@2x.png`} alt="" />
       <span className="font-weight-bold">{temperature}&deg;</span>
       {/* <span className="descriprion">{descriptions}</span> */}
   </li>
);
export default HourlyForecastItem;