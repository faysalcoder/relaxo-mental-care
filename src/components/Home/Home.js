import React from 'react';
import Banner from './Banner/Banner';
import Counselors from './Counselors/Counselors';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Counselors></Counselors>
        </div>
    );
};

export default Home;