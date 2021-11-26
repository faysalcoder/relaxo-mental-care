import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css'

const Login = () => {
    const { handleRegister, user, handleLogIn, setError, error, handleGoogleSignIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [toggle, setToggle] = useState(false)
    const [formError, setFormError] = useState('')
    const handleValidation = e => {
        e.preventDefault();
        if (password.length < 6) {
            setFormError('PassWord Must Be 6 Character')
            return;
        }
        if (! /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(password)) {
            setFormError('try strong pass')
            return
        }
        toggle ? handleRegister(name, email, password) : handleLogIn(email, password);
        setFormError('')





    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleToggle = e => {
        setToggle(e.target.checked)
    }


    console.log(user)
    return (
        <div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                            <div className="card-img-left d-none d-md-flex">

                            </div>
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">
                                    {
                                        toggle ? "Register" : "Login"
                                    }
                                </h5>
                                <form onSubmit={handleValidation}>

                                    {
                                        toggle && <div className="form-floating mb-3">
                                            <input onBlur={handleName} type="text" className="form-control" id="Name" placeholder="Your Name" required autofocus />
                                            <label htmlFor="Name">Name</label>
                                        </div>
                                    }


                                    <div className="form-floating mb-3">
                                        <input onBlur={handleEmail} type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                        <label htmlFor="floatingInputEmail">Email address</label>
                                    </div>



                                    <div className="form-floating mb-3">
                                        <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check text-start text-primary mb-3">
                                        <input onChange={handleToggle} className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label className="form-check-label text-bold  " htmlFor="rememberPasswordCheck">
                                            New User?
                                        </label>
                                    </div>
                                    <p className="text-danger">{error}</p>
                                    <p className="text-danger">{formError}</p>
                                    <div className="d-grid mb-2">
                                        <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">
                                            {
                                                toggle ? "Register " : "Login"
                                            }
                                        </button>
                                    </div>



                                    <hr className="my-4" />



                                </form>

                                <button onClick={handleGoogleSignIn} className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                                    <FontAwesomeIcon icon={faGoogle} />  Sign in with Google
                                </button>






                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;