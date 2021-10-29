import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { WiThermometer } from 'react-icons/wi';

const CurrentForecast = ({location,temperature,weatherIcon,weatherDescription,country,weekday,date,temperature_max,temperature_min}) => {
    const newWeatherIcon = weatherIcon.replace("'","");
    return (
        <Container className="container currentContent">
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Row >
                        <Col className="country-name-content d-flex justify-content-center align-items-center flex-column">
                        <span> {location} / <b>{country}</b>  </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="day-name">
                        <span> {weekday} - {date}</span>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center ">
                        <Col className="d-flex justify-content-center pt-3 pb-2">
                        <div className="wetherIcon  d-flex justify-content-center align-items-center p-0"
                            ><img src={newWeatherIcon} className="weather-icon"/>
                            </div>
                            <div className="temp  d-flex align-items-center p-0" >
                            <span >{temperature}&deg;</span>
                                <div className="max-min-temp">
                                        <span>{temperature_max}&deg;</span>
                                        <span>+</span>
                                        <span><WiThermometer/></span>
                                        <span>-</span>
                                        <span>{temperature_min}&deg;</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col  xs lg="8" className="descriptionTemp">
                        {weatherDescription}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentForecast
