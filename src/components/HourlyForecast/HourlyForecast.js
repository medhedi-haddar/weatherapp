import React from 'react'

import HourlyForecastItem from '../HourlyForecastItem/HourlyForecastItem';

const HourlyForecast = ({ hourlyforecast }) => {    
    return(
        <ul className="hourly-list d-flex p-0 flex-row flex-nowrap overflow-auto">
            {hourlyforecast.map((hourly,index)=> (
                <HourlyForecastItem {...hourly} key={index}/>
            ))}  
        </ul>
        )
    }

export default HourlyForecast
