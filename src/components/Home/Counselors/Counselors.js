import React from 'react';
import useCounselors from '../../../hooks/useCounselors';
import Counselor from '../Counselor/Counselor';

const Counselors = () => {
    const { counselors } = useCounselors()
    return (
        <div className="container-fluid my-5" >
            <h2 className="text-classic-2 d-inline fw-bold" style={{
                borderBottom: "2px solid #76B81E"
            }}>Counselors</h2>

            <h1 style={{ fontSize: "40px", color: "#1F263E" }} className="my-4">Meet Our Counselors</h1>
            <br /> <br />
            <div className="row row-cols-1 row-cols-md-4 g-5 mx-5" id="counselor">

                {
                    counselors.map(counselor => <Counselor key={counselor.id} counselor={counselor} />)
                }
            </div>

        </div>
    );
};

export default Counselors;