import React from 'react';
import useService from '../../../hooks/userService';
import Service from '../Service/Service';

const Services = ({ isHome }) => {
    const { services } = useService()
    return (
        <div className="container-fluid my-5" >
            <h2 className="text-classic-2 d-inline fw-bold" style={{
                borderBottom: "2px solid #76B81E"
            }}>Our Services</h2>
            <br /> <br />
            <div className="row row-cols-1 row-cols-md-3 g-5 mx-5" id="services">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;