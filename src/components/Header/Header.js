import React from 'react'
import Form from '../Form/Form';
import {Navbar,Nav,Container} from 'react-bootstrap';

const Header = ({submitRequest}) => {

    const onSubmit = (value) => {
        submitRequest(value);
    }
    return (
        
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img src={`${process.env.PUBLIC_URL}/favicon.png`} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"
      />
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