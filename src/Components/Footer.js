import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-top py-lg-5 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-lg-0 mb-4">
                                <div className="social-icons">
                                    <h5 className="footer-top-title">stay connected</h5>
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
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="footer-top-title">latest posts</h5>
                                <ul className="post-links">
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor sit amet.Cras rutrum iaculis enim, non mattis.
                            </a>
                                        <span className="fa fa-clock-o mr-3"></span> 3 hrs ago
                        </li>
                                    <li>
                                        <a href="#">
                                            Lorem ipsum dolor sit amet.Cras rutrum iaculis enim, non mattis.
                            </a>
                                        <span className="fa fa-clock-o mr-3"></span> 10 hrs ago
                        </li>

                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="footer-top-title">contact information</h5>
                                <ul className="d-flex flex-column">
                                    <li>
                                        <span className="fa fa-home mr-3 text-white"></span>
                                        <p className="d-inline text-white">+4667 Woodland, California 916-983-6577.</p>
                                    </li>
                                    <li className="my-3">
                                        <span className="fa fa-envelope-open mr-3 text-white"></span>
                                        <a href="mailto:example@email.com" className="text-white">info@example.com</a>
                                    </li>
                                    <li>
                                        <span className="fa fa-phone mr-3 text-white"></span>
                                        <p className="d-inline text-white">+456 123 7890</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 footer-logo mb-lg-0 mb-4 text-lg-left text-center">
                                <h2>
                                    <a href="index.html">RMF</a>
                                </h2>
                            </div>
                            <div className="col-lg-6 cpy-right text-lg-right text-center">
                                <p>© 2018 Cafe. All rights reserved | Design by
                        <a href="http://w3layouts.com"> W3layouts.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;