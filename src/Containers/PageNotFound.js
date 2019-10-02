import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class PageNotFound extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <h1>PageNotFound</h1>
                <Footer />
            </React.Fragment>
        )
    }
}

export default PageNotFound;