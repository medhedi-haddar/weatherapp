import React from 'react'
import Form from '../Form/Form';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { WiDayCloudy } from "react-icons/wi";

const Header = ({submitRequest}) => {

    const onSubmit = (value) => {
        submitRequest(value);
    }
    return (
        <Navbar expand="lg" >
        <Container>
            <Navbar.Brand href="#home">
                <WiDayCloudy className="nav-brand" size={35}/>
            </Navbar.Brand>
            <Navbar.Brand href="#home">Weather APP <small>2.0</small></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto"></Nav>
                <Form submitSearch={onSubmit}/>
            </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}

export default Header