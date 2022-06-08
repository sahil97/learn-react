import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        Note Zipper
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link>
                        <Link to='/mynotes'>
                            My Notes
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="Name" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default Header