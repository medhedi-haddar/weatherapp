import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import styles from './CurrentForecast.module.css';

const CurrentForecast = ({location,temperature,weatherIcon,weatherDescription,country,weekday,date}) => {
    const newWeatherIcon = weatherIcon.replace("'","");
    return (
        <Container className={`container ${styles.currentContent}`}>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Row >
                        <Col className={`${styles.countryNameContent} d-flex justify-content-center align-items-center flex-column`}>
                        <span> {location} / <b>{country}</b>  </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={`${styles.dayName}`}>
                        <span> {weekday} - {date}</span>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center ">
                        <Col className={`  d-flex justify-content-center pt-3 pb-2`}>
                        <div className={`${styles.wetherIcon}  d-flex justify-content-center align-items-center p-0`}
                            ><img src={newWeatherIcon} className="weather_icon"/>
                            </div>
                            <div className={`${styles.temp}  d-flex align-items-center p-0`} >
                            <span >{temperature}&deg;</span>
                                <div className={`${styles.maxMinTemp}`}>
                                        <span>11&deg;</span>
                                        <span>12&deg;</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col  xs lg="8" className={`${styles.descriptionTemp}`}>
                        {weatherDescription}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentForecast
