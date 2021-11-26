import React from 'react';
import useAuth from '../../hooks/useAuth';
import noImage from '../../images/no-image.jpg';
import Counselors from '../Home/Counselors/Counselors';
import './profile.css'
const Profile = () => {

    const { user } = useAuth()
    return (
        <div>

            <h1 style={{ fontSize: "50px", color: "#1F263E" }} className="my-4 mb-5">Profile</h1>
            <div className="mb-5">


                {
                    user?.photoURL ? <img src={user.photoURL} className="profile-img mb-4" alt="" /> : <img src={noImage} className="profile-img mb-4" alt="" />
                }

                {
                    user?.email ? <h2>Name: {user.displayName}</h2> : <h2>Name Undefined</h2>
                }
                <h5>Email: {user.email} </h5>
                {
                    user?.emailVerified === null ? <h5 className="text-success">Verified</h5> : <h5 className="text-danger">Not Verified</h5>
                }

            </div>

            <Counselors></Counselors>
        </div>
    );
};

export default Profile;