import React from 'react';
import notfound from '../../images/error.gif'

const NotFound = () => {
    return (
        <div className="container-fluid">
            <h1 className="my-5">404- Something Went Wrong</h1>
            <img className="img-fluid" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;