import './header.css'
import { useNavigate } from "react-router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import a from "../../../assets/logo.png"
import { useEffect, useState } from 'react';

const Header = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email)
            }
        })
    }, [auth])

    const handleLogOut = async () => {
        await signOut(auth);
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            {/* navbar-warning bg-warning
            navbar-light bg-light */}
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder d-sm-none d-block" href="/">cinezta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-75" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 d-flex justify-content-evenly me-auto mb-2 mb-lg-0">

                        

                        <li className="nav-item">
                            <img
                                src={a}
                                width="150px" height="45px" alt="" />
                        </li>

                        <li className="nav-item">
                            <a className="nav-link fw-bolder active d-none d-sm-block" aria-current="page"
                                href="/"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button"
                                aria-expanded="false">Products</a>
                            <ul className="dropdown-menu">

                                <li onClick={() => {
                                    navigate('/product/cinnamon')
                                }}><a className="dropdown-item" href="#">Cinnamon</a></li>
                                <hr />

                                <li onClick={() => {
                                    navigate('/product/pepper')
                                }}><a className="dropdown-item" href="#">Pepper</a></li>
                                <hr />

                                <li onClick={() => {
                                    navigate('/product/organic_products')
                                }}><a className="dropdown-item" href="#">Organic Products</a></li>
                                <hr />

                               {/*  <li onClick={() => {
                                    navigate('/product/accessories')
                                }}><a className="dropdown-item" href="#">Accessories</a></li>

                                <hr />
                                <li onClick={() => {
                                    navigate('/product/pots')
                                }}><a className="dropdown-item" href="#">Pots</a></li> */}

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/about-us" tabIndex="-1"
                                aria-disabled="true">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/contact-us" tabIndex="-1"
                                aria-disabled="true">Contact</a>
                        </li>
                        {<li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
                            {auth.currentUser ? (
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item " href="/profile">
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={handleLogOut}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => { navigate('/login') }}>
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => { navigate('/register') }}>
                                            Registration
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>}
                        
                        <li className="nav-item">
                            <form className="d-flex" action="/product">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="product" />
                                <button className="abc" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <img onClick={() => {
                                navigate('/cart')
                            }}
                                src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-23.jpg"
                                width="35px" height="35px" alt="" />
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )

}
export default Header;