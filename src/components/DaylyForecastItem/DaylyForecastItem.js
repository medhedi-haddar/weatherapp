
import React from 'react';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
const imgUrlBase = 'http://openweathermap.org/img/wn/';

const DaylyForecastItem = ({day,date,temperature,temperatureMin,temperatureMax,temperatureressenti,descriptions,pressure,uvi,icon,humidity }) => (
        
    <li className="dayly_item  d-flex flex-column justify-content-center align-items-center p-2 pb-3 " > 
       <Card className="dayly-card" style={{ width: '14rem' }}>
            <Card.Body>
                <Card.Title className="dayly-title ta-left" >
                <h5>{day}</h5>
                <span>{date}</span>
                </Card.Title>
                <div className="d-flex justify-content-between">
                    <div className="temp-icon d-flex justify-content-start"><img className="mb-2" width="30" src={`${imgUrlBase}/${icon}@2x.png`} alt="" /></div>
                    <div className="temp-text d-flex justify-content-end"><span>{temperature}&deg;</span></div>
                </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="list-group-item d-flex justify-content-between bg-transparent">
                        <div>min {temperatureMin}&deg;</div>
                        <div>{temperatureMax}&deg; max</div>
                </ListGroupItem>
                <ListGroupItem className="list-group-item d-flex justify-content-between bg-transparent">
                        <div className="row">
                            <div className="small-text d-flex justify-content-start">Pressure</div>
                            <div className="d-flex justify-content-start"> {pressure} hPa </div>
                        </div>
                        <div className="row">
                            <div className="small-text d-flex justify-content-end" ><small>Humidity</small></div>
                            <div className="d-flex justify-content-end">{humidity} %</div>
                        </div>
                </ListGroupItem>
                <ListGroupItem className="list-group-item d-flex justify-content-between bg-transparent">
                        <div className="row">
                            <div className="small-text d-flex justify-content-start">Feels like</div>
                            <div className="d-flex justify-content-start"> {temperatureressenti}&deg; </div>
                        </div>
                        <div className="row d-flex">
                            <div className="small-text d-flex justify-content-end" ><small>Uiv</small></div>
                            <div className="d-flex justify-content-end">{uvi}</div>
                        </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
   </li>
);
export default DaylyForecastItem;