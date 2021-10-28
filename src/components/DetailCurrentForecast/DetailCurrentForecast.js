import React from 'react'
import { Container,Row, Col,ListGroup } from 'react-bootstrap';
import {WiWindDeg,WiThermometer, WiStrongWind, WiBarometer, WiCloud, WiHumidity, WiRain,WiSnow,WiSunrise,WiSunset,WiMoonrise,WiMoonset} from 'react-icons/wi';
import './DetaiCurrentForecast.css'

import moment from 'moment';
import 'moment/locale/fr'
import SunMoonRise from '../SunMoonRise/SunMoonRise';
moment.locale('fr');

const DetailCurrentForecast = ({
        sunrise,
        sunset,
        moonrise,
        moonset,
        moon_phase,
        pressure,
        humidity,
        wind_speed,
        wind_deg,
        wind_gust,
        clouds,
        temp_night,
        temp_eve,
        temp_morn,
        feels_like_day,
        feels_like_night,
        feels_like_eve,
        feels_like_morn,
        rain,
        pop,
        snow,
    }) => {
 
    return (
        <Container fluid="md">
            <Row>
                <Col xs={7} lg={7} md={12} className=" col-12">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className="p-2">
                                <Row xs={3} md={2} lg={2} className="justify-content-between left-block">
                                <div className="d-flex row ">
                                        <span><WiBarometer size={32}/></span>
                                        <span>Pression</span>
                                        <span>{pressure} hPa</span>
                                    </div>
                                    <div className="d-flex row">
                                        <span><WiHumidity size={32}/></span>
                                        <span>Humidité</span>
                                        <span>{humidity} %</span>
                                    </div>
                                    <div className="d-flex row">
                                        <span><WiCloud size={32}/></span>
                                    <span>Nuage</span>
                                        <span>{clouds} %</span>
                                    </div>

                                    {rain ?  
                                        <div className="d-flex row">
                                            <span><WiRain size={32}/></span>
                                            <span>Pluie</span>
                                            <span>{rain}mm ({pop})%</span>
                                        </div>
                                    : ''}
                                    {snow ?  
                                        <div className="d-flex row">
                                            <span><WiSnow size={32}/></span>
                                            <span>Neige</span>
                                            <span>{snow}mm</span>
                                        </div>
                                    : ''}
                                </Row>    
                            </Col>
                            <Col xs={12} md={6}  >
                                <div className="svg_content">
                                    <SunMoonRise/>
                                    <div className="moon_phase_content">
                                        <ListGroup className="wolf-list-group list-group-flush">
                                            <ListGroup.Item className="wolf-list-group-item bg-transparent">
                                                <Row>
                                                    
                                                    <Col> <small>{sunrise}</small> </Col>
                                                    <Col> <WiSunrise size={28}/> </Col>
                                                </Row>
                                                <Row>
                                                
                                                    <Col> <small>{sunset}</small> </Col>
                                                    <Col> <WiSunset size={28}/> </Col>
                                                </Row>
                                                <Row>
                                                    
                                                    <Col> <small>{moonrise}</small> </Col>
                                                    <Col> <WiMoonrise size={28}/> </Col>
                                                </Row>
                                                <Row>
                                                
                                                    <Col> <small>{moonset}</small> </Col>
                                                    <Col> <WiMoonset size={28}/> </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>            
                                </div>
                            </Col>
                        </Row>    
                    </Container>  
                </Col>
                <Col md={12} lg={5}  className="font-size-1">
                    {/* temp, humidity ... */}
                    <ListGroup variant="flush" className="wolf-list-group bg-transparent">
                    <ListGroup.Item className="wolf-list-group-item bg-transparent">
                        <Row>
                            <Col className="text-center text-lg-start right-block-item">
                                <WiThermometer size={24}/> Tempurature
                            </Col>
                            <Col xs={12} md={12} lg={{span :7, offset:1}} >
                                <Row >
                                    <Col className="d-flex row text-start"><span>Matin</span><span>{temp_morn}&deg;</span></Col>
                                    <Col className="d-flex row"><span>Midi</span><span>{temp_eve}&deg;</span></Col>
                                    <Col className="d-flex row text-end"><span>Soirée</span><span>{temp_night}&deg;</span></Col>
                                </Row>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="wolf-list-group-item bg-transparent">
                    
                        <Row>
                            <Col className="text-center text-lg-start justify-content-between right-block-item"><WiThermometer size={24}/> Ressenti</Col>
                            <Col xs={12} md={12} lg={{span :8, offset:1}} >
                                <Row >
                                    <Col className="d-flex row text-start"><span>Matin</span><span>{feels_like_morn}&deg;</span></Col>
                                    <Col className="d-flex row"><span>Journée</span><span>{feels_like_day}&deg;</span></Col>
                                    <Col className="d-flex row"><span>Soirée</span><span>{feels_like_eve}&deg;</span></Col>
                                    <Col className="d-flex row text-end"><span>nuit</span><span>{feels_like_night}&deg;</span></Col>
                                </Row>
                            </Col>
                        </Row>

                    </ListGroup.Item>
                    <ListGroup.Item className="wolf-list-group-item bg-transparent">
                    <Row>
                        <Col className="text-center text-lg-start justify-content-between right-block-item"><WiStrongWind size={24}/> Vent</Col>
                            <Col xs={12} md={12} lg={{span :8, offset:1}} >
                                <Row >
                                    <Col className="d-flex row text-start"><span>Vitesse</span><span>{wind_speed} Km/h</span></Col>

                                    {wind_gust ? 
                                    <Col className="d-flex row"><span>Rafale</span><span>{wind_gust} Km/h</span></Col>
                                    : ""}
                                    <Col className="d-flex row text-end"><span>
                                        Direction
                                        </span><span className="d-flex justify-content-end
                                        align-items-center"> <WiWindDeg size={18} style={{ transform: `rotate(${wind_deg}deg)` }}/>  {wind_deg}&deg;</span></Col>
                                   
                                </Row>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
            {/* sunrise moonrise */}
            
        </Container>
    )
}

export default DetailCurrentForecast


