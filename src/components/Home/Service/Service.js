import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, img, description, scheme, id } = service
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body p-3 text-start">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text fw-light">{description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">

                        <Link to={`/services/${name}`}>
                            <button className="btn-classic">Learn More</button>
                        </Link>

                        <small className="text-muted">{scheme}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;