
import React from 'react';

import styles from './HourlyForecastItem.module.css';

const imgUrlBase = 'http://openweathermap.org/img/wn/';

const HourlyForecastItem = ({date, temperature, icon, descriptions }) => (
        
    <li className={`${styles.hourly_item}  d-flex flex-column justify-content-center align-items-center p-3 pt-4 pb-4 text-light`} >
       <span className={`${styles.hourly_hour} mb-2`}>{date}</span>
       <img className="mb-2" width="30" src={`${imgUrlBase}/${icon}@2x.png`} alt="" />
       <span className="font-weight-bold">{temperature}&deg;</span>
       {/* <span className={`${styles.descriprion}`}>{descriptions}</span> */}
   </li>
  
);
export default HourlyForecastItem;