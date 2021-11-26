import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useService from '../../../hooks/userService';
import Counselors from '../Counselors/Counselors';

const ViewService = () => {
    const { serviceName } = useParams();
    const { services } = useService();

    const [serviceView, setServiceView] = useState({})
    const { name, img, description, } = serviceView

    useEffect(() => {
        if (services.length) {
            const service = services.find(service => serviceName === service.name)
            setServiceView(service)
            console.log(service)
        }
    }, [services, serviceName])




    return (
        <div>
            <div className="container-sm">
                <h1 className="my-5">{name}</h1>
                <img src={img} alt="" />
                <blockquote className=" h4 my-5" style={{ color: "#3A6882" }}>"{description}"</blockquote>
                <button className="btn-classic">Apply For Therapy</button>
            </div>
            <Counselors></Counselors>
        </div>
    );
};

export default ViewService;