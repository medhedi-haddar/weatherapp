import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { IconButton, Button } from '@material-ui/core';

const Footer = () => {
    return (
        <Container fluid className="p-5 footer">
            <Row className="justify-content-md-center"  >
               <Col >
                    <p>
                        This Web-App is created with React.js
                    </p>
                    <p>
                        <Button className="link" href="mailto:medhedi.haddar@gmail.com?subject=Contact%20from%20weather%20app%20v2.0%20project"><small>medhedi.haddar@gmail.com</small></Button>
                    </p>
                    <IconButton href="https://github.com/medhedi-haddar/weatherapp" color="primary" target="_blank" aria-label="GitHub" >
                    <BsGithub size={30} className="footer-icon"/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/med-hedi-haddar" color="primary" target="_blank" aria-label="GitHub" >
                    <BsLinkedin size={30} className="footer-icon"/>
                </IconButton>
               </Col> 
            </Row>
        </Container>
    )
}

export default Footer
