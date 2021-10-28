import React from 'react'
import styles from './DaylyForecast.module.css'
import DaylyForecastItem from '../DaylyForecastItem/DaylyForecastItem';

const DaylyForecast = ({daylyForecast}) => {
    return (
        <ul className={`${styles.dayly_list} d-flex p-0 flex-row flex-nowrap overflow-auto`}>
        {daylyForecast.slice(1).map((dayly,index)=> (
            <DaylyForecastItem {...dayly} key={index}/>
        ))}  
    </ul>
    )
}

export default DaylyForecast
