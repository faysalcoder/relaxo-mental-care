import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (

        <>





            <Navbar className="bg-classic m-0" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", letterSpacing: "3px" }}>Relaxo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={HashLink} to="/home#home"><span className="fw-bold text-light">Home</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services"><span className="fw-bold text-light">Services</span></Nav.Link>
                            <Nav.Link as={Link} to="/about"><span className="fw-bold text-light">About</span></Nav.Link>
                            <Nav.Link as={Link} to="/contact"><span className="fw-bold text-light">Contact</span></Nav.Link>
                            {
                                user?.email && <Nav.Link as={Link} to="/profile"><span className="fw-bold text-light">Profile</span></Nav.Link>
                            }
                            {
                                user?.displayName && <span className="tex-light fs-4 mx-4" style={{ color: "white", cursor: "pointer" }}><FontAwesomeIcon icon={faUser} />{user?.displayName}</span>
                            }
                            {
                                user?.email ? <button onClick={handleLogOut} className="btn btn-light">Logout</button> : <Link to="/login"><button className="btn btn-light">Login</button></Link>
                            }





                        </Nav>

                    </Navbar.Collapse>
                </Container>




            </Navbar>

        </>


    );
};

export default Header;