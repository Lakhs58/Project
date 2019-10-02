import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <h1>
                                    <Link className="navbar-brand" to="/">
                                        RM Finder
                            </Link>
                                </h1>
                            </div>
                            <div className="col-lg-9 header-bottom-wthree">
                                <div className="d-md-flex justify-content-lg-end justify-content-center header-right">
                                    <ul className="social-icons">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-google-plus" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-linkedin" aria-hidden="true"></span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="right_nav">
                                        <button type="button" className="btn  wthree-link-bnr bg-transparent text-secondary">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </button>
                                        <button type="button" className="btn  ml-2 wthree-link-bnr">
                                            <Link className="nav-link" to="/registration">Registration</Link></button>
                                    </div>
                                </div>
                                <nav className="navbar second navbar-expand-lg navbar-light">
                                    <button className="navbar-toggler mx-auto mt-lg-0 mt-sm-4" type="button" data-toggle="collapse"
                                        data-target=".navbar-toggle" aria-controls="navbarNavAltMarkup1" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse navbar-toggle" id="navbarNavAltMarkup1">
                                        <div className="navbar-nav secondfix ml-lg-auto">
                                            <ul className="navbar-nav text-center">
                                                <li className="nav-item mr-lg-3">
                                                    <Link className="nav-link" to="/">Home</Link>
                                                </li>
                                                <li className="nav-item mr-lg-3">
                                                    <Link className="nav-link" to="/about">about</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;