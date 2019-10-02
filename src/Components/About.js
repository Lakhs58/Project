import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="offer-wthree py-lg-5 py-3" id="about">
                    <div className="container  py-sm-5">
                        <div className="title-w3ls text-center">
                            <span className="sub-title">add your caption here</span>
                            <h4 className="w3pvt-title">welcome to RM Finder
                </h4>
                        </div>
                        <div className="row head-row-home text-center">
                            <div className="col-lg-10 mx-auto">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 my-sm-4 mt-4">
                                        <div className="home-grid">
                                            <span className="num-title">01</span>
                                            <h4 className="home-title my-3">why choose us</h4>
                                            <p> Pellentesque in ipsum id orci porta dapibus roined magna orem ipsum dolor sit
                                    ame.</p>
                                            <a href="#" className="btn wthree-bnr-btn">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 my-4">
                                        <div className="home-grid">
                                            <span className="num-title">02</span>
                                            <h4 className="home-title my-3">what we do</h4>
                                            <p> Pellentesque in ipsum id orci porta dapibus roined magna orem ipsum dolor sit
                                    ame.</p>
                                            <a href="#team" className="btn wthree-bnr-btn scroll">Read more</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 my-lg-4 mb-4 mx-auto">
                                        <div className="home-grid">
                                            <span className="num-title">03</span>
                                            <h4 className="home-title my-3">explore Cafe</h4>
                                            <p> Pellentesque in ipsum id orci porta dapibus roined magna orem ipsum dolor sit
                                    ame.</p>
                                            <a href="#portfolio" className="btn wthree-bnr-btn scroll">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About;