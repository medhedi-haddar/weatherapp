
import React from 'react';

import styles from './DaylyForecastItem.module.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
const imgUrlBase = 'http://openweathermap.org/img/wn/';

const DaylyForecastItem = ({day,date,temperature,temperatureMin,temperatureMax,temperatureressenti,descriptions,pressure,uvi,icon,humidity }) => (
        
    <li className={`${styles.dayly_item}  d-flex flex-column justify-content-center align-items-center p-2 pt-4 pb-4 text-light`} > 
       <Card className={`${styles.dayly_card} bg-dark`}  style={{ width: '14rem' }}>
        <Card.Body>
            <Card.Title className={`${styles.dayly_title} ta-left`} >
            <h5>{day}</h5>
            <span>{date}</span>
            </Card.Title>
            <div className={`${styles.dayly_temp} d-flex justify-content-between`}>
                <div className={`${styles.temp_icon} d-flex justify-content-start`}><img className="mb-2" width="30" src={`${imgUrlBase}/${icon}@2x.png`} alt="" /></div>
                <div className={`${styles.temp_text} d-flex justify-content-end`}><span>{temperature}&deg;</span></div>
            </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem className={`${styles.list_group_item} d-flex justify-content-between bg-transparent`}>
                    <div>min {temperatureMin}&deg;</div>
                    <div>{temperatureMax}&deg; max</div>
            </ListGroupItem>
            <ListGroupItem className={`${styles.list_group_item} d-flex justify-content-between bg-transparent`}>
                    <div className="row">
                        <div className={`${styles.small_text} d-flex justify-content-start`}>Pression</div>
                        <div className="d-flex justify-content-start"> {pressure} hPa </div>
                    </div>
                    <div className="row">
                        <div className={`${styles.small_text} d-flex justify-content-end`} ><small>Humidité</small></div>
                        <div className="d-flex justify-content-end">{humidity} %</div>
                    </div>
            </ListGroupItem>
            <ListGroupItem className={`${styles.list_group_item} d-flex justify-content-between bg-transparent`}>
                    <div className="row">
                        <div className={`${styles.small_text} d-flex justify-content-start`}>Ressenti</div>
                        <div className="d-flex justify-content-start"> {temperatureressenti}&deg; </div>
                    </div>
                    <div className="row d-flex">
                        <div className={`${styles.small_text} d-flex justify-content-end`} ><small>Indice uv</small></div>
                        <div className="d-flex justify-content-end">{uvi}</div>
                    </div>
            </ListGroupItem>
        </ListGroup>
       
        </Card>

   </li>
  
);
export default DaylyForecastItem;