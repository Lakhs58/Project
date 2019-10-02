import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    <div className="container">
                        <div className="banner-text">
                            <h3>Begin The Day With Room Mates </h3>
                            <p>Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, At vero eos et accusam et justo duo </p>
                            <div className="d-flex justify-content-center mt-sm-5 mt-3">
                                <a href="#about" className="text-capitalize serv_link btn bg-theme  scroll">explore now</a>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Banner;