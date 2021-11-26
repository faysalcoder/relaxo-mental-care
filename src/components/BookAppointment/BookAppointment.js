import React from 'react';
import client from '../../images/client say.png'

const BookAppointment = () => {
    return (
        <div className="container-sm mb-5">
            <div className="row row-cols-md-2 my-5 text-start">

                <div className="col">
                    <h2 style={{ fontWeight: "bold", letterSpacing: "3px" }} className="mb-5 text-start">Relaxo</h2>
                    <p>The Ralxo Foundation has established itself as a Leader in evidence-based behavioural health. The organization has also progressively made its mark in the Global Behavioural Healthcare</p>
                    <img src={client} alt="" />

                </div>
                <div className="col d-flex flex-column justify-content-around px-5 text-light py-4" style={{ backgroundColor: "#3A6882" }}>

                    <h4>Book An Appointment</h4>
                    <p>Please feel free to contact us we will get back to you as soon as possible.</p>
                    <select className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px" }} name="" id="">
                        <option value="Depression">Depression</option>
                        <option value="Medication">Medication Management</option>
                        <option value="Insomnia">Insomnia</option>
                        <option value="ADHD">ADHD</option>
                        <option value="PTSD">PTSD</option>
                        <option value="Anxiety & Panic Attacks">Anxiety & Panic Attacks</option>
                        <option value="Childhood disease and disorder">Childhood disease and disorder</option>
                        <option value="Mental disorders">Mental disorders</option>
                        <option value="Special Kids">Special Kids</option>
                    </select>

                    <input style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="text" placeholder="Enter Full name" />
                    <input style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="email" placeholder="Enter  email adress" />
                    <input style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="text" placeholder="Enter Mobile Number " />
                    <textarea name="" id="" cols="30" rows="3" style={{ padding: "10px", border: "none", borderRadius: "5px" }} type="email" placeholder="Enter Adress"></textarea>
                    <button className="my-2" style={{ padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#FFB87B", color: "white", fontWeight: "bold", letterSpacing: "3px" }}>Book An Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default BookAppointment;