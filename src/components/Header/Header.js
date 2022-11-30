import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onChangeHeader } from '../reducers/headerreducer';
// import { useNavigate } from 'react-router-dom';

const Header = () => {
    const getStatus = useSelector((state) => state.header.loginStatus)
    const getSize = useSelector((state) => state.cart.items.length)

    // const navigation = useNavigate()
    const dispatch = useDispatch()
    const onLogoutHandler = () => {
        dispatch(onChangeHeader(false))
        localStorage.removeItem('token')
        

    }
  
    return (

        <div>
            {
                getStatus ? <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to=''>Restaurent</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to=''>Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to='products'>Products<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='' onClick={onLogoutHandler}>LogOut</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='cart'>Cart-{getSize}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to='aboutus'>About us</Link>
                                    {/* <Link className="dropdown-item" to='register'>Register</Link> */}
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to='contactus'>Contact us</Link>
                                </div>
                            </li>

                        </ul>
                       
                    </div>
                </nav> : <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to=''>Restaurent</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to=''>Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='login'>Login</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to='aboutus'>About us</Link>
                                    <Link className="dropdown-item" to='register'>Register</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to='contactus'>Contact us</Link>
                                </div>
                            </li>

                        </ul>
                        
                    </div>
                </nav>
            }



        </div>
    )
}

export default Header