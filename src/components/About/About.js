import React from 'react';
import ceo from '../../images/ceo.png'

const About = () => {
    return (
        <div className="container-fluid my-5 mb-5">
            <h5 className="text-classic-2 d-inline fw-bold" style={{
                borderBottom: "2px solid #76B81E"
            }}>About Ralaxo</h5>

            <h1 style={{ fontSize: "50px", color: "#1F263E" }} className="my-4 mb-5">We Provide Solutions For You</h1>

            <div className="row">
                <div className="col-md-5 d-flex justify-content-end">

                    <img src={ceo} alt="" />
                </div>
                <div className="col-md-7 text-start pt-5">

                    <h1>Madeleine Fisher, M.Psi., Psi</h1>
                    <h3>FOUNDER & CEO RELAXO</h3>
                    <blockquote className=" h4 my-5" style={{ color: "#3A6882" }}>"The Ralxo Foundation has established itself as a Leader in evidence-based behavioural health. The organization has also progressively made its mark in the Global Behavioural Healthcare space by focusing on filling the gap between Neuroscience, Positive Psychology and Healthcare and unyielding dedication towards research, discovery, application and advancement of clinical solutions for the prevention, diagnosis and treatment of a multitude of psychological and psychosomatic ailments."</blockquote>

                    <button className="btn-classic my-4">Give An Appoinment</button>

                    <div className="row row-cols-sm-3 text-center text-light container-fluid">

                        <div className="col bg-success py-5" >
                            <h2>100+</h2>
                            <small>Sucesses</small>
                        </div>
                        <div className="col bg-warning py-5"><h2>400+</h2>
                            <small>Project and Works</small></div>
                        <div className="col bg-secondary py-5"><h2>98%</h2>
                            <small>Recomended</small></div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;