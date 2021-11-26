import React from 'react';

const Counselor = ({ counselor }) => {
    const { name, img, designation } = counselor
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body p-3 text-start">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text fw-light">{designation}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Counselor;