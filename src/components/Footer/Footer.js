import { faEnvelope, faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" container-fluid footer-container mt-5">

            <div style={{ borderRadius: "5px" }} className="subscricbe row row-cols-1 row-cols-md-2 p-3 py-4 mx-auto text-start">
                <div className="col">
                    <h6 style={{ color: "#FFB979", fontWeight: "bold", letterSpacing: "3px" }} >NEWSLETTER</h6>
                    <h1>Join Our Newsletter</h1>
                    <p>Join Now and get free counsilng with experts</p>
                </div>
                <div className="col d-flex flex-column justify-content-around">
                    <input style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="text" placeholder="Enter your email adress" />
                    <button style={{ padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#FFB87B", color: "white", fontWeight: "bold", letterSpacing: "3px" }}>Subscribe</button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5   container-fluid mt-5 " >
                <div className="col  ps-5">
                    <h2 as={Link} to="/" style={{ fontWeight: "bold", letterSpacing: "3px" }} className="mb-5">Relaxo</h2>
                    <h6><FontAwesomeIcon icon={faLocationArrow} className="me-2" /> Dhaka , Bangladesh</h6>
                    <h6><FontAwesomeIcon icon={faEnvelope} className="me-2" /> example.web@gmail.com</h6>
                    <h6><FontAwesomeIcon icon={faPhone} className="me-2" /> Dhaka , Bangladesh</h6>
                </div>
                <div className="col row row-cols-2 pt-5">

                    <div className="col link text-light">
                        <h4>Quick Links</h4>
                        <br />
                        <Link className="text-light  text-decoration-none" to="/home"><p>Home</p></Link>
                        <HashLink className="text-light  text-decoration-none" to="/home#services"><p>Services</p></HashLink>
                        <Link className="text-light  text-decoration-none" to="/about">about</Link>
                    </div>
                    <div className="col">
                        <h4>Services</h4>

                        <br />
                        <Link className="text-light  text-decoration-none" to="/services/Depression"><p>Depression</p></Link>
                        <Link className="text-light  text-decoration-none" to="/services/Insomnia"><p>Insomnia</p></Link>
                        <Link className="text-light  text-decoration-none" to="/services/ADHD"><p>ADHD</p></Link>
                        <Link className="text-light  text-decoration-none" to="/services/PTSD"><p>PTSD</p></Link>

                    </div>
                </div>
                <div className="col">
                    <h5>Follow Us</h5>

                    <span className="mx-1 fs-1"><FontAwesomeIcon icon={faFacebook} /></span>
                    <span className="mx-1 fs-1"><FontAwesomeIcon icon={faTwitter} /></span>
                    <span className="mx-1 fs-1"><FontAwesomeIcon icon={faYoutube} /></span>
                </div>

            </div>
            <hr />

            <span>© 2021 Ralaxo. ALL RIGHTS RESERVED.</span>

        </div>
    );
};

export default Footer;