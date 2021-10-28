import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
const Footer = () => {
    return (
        <Container fluid className="bg-dark p-5 footer">
            <Row className="justify-content-md-center"  >
               <Col className="text-start" xs lg="3">
                    <p>
                    This project was developed on react.js
                    </p>
                    <p>
                        <small>medhedi.haddar@gmail.com</small>
                    </p>
               </Col> 
               <Col className="text-end" xs lg="3">
                <a href="https://github.com/medhedi-haddar/weatherapp" target="_blank"><BsGithub size={30}/></a>
                
               </Col> 
            </Row>
        </Container>
    )
}

export default Footer
